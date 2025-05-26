import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Ініціалізація OpenAI клієнта
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ID вашого Assistant з OpenAI Platform
const ASSISTANT_ID = process.env.ASSISTANT_ID!;

// Rate limiting (простий in-memory store)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // 10 запитів на хвилину
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 хвилина

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Валідація повідомлення
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Повідомлення не може бути порожнім' }, { status: 400 });
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Повідомлення занадто довге (максимум 500 символів)' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Занадто багато запитів. Спробуйте через хвилину.' },
        { status: 429 }
      );
    }

    // Створення thread для розмови
    const thread = await openai.beta.threads.create();

    // Додавання повідомлення користувача в thread
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: message,
    });

    // Запуск Assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: ASSISTANT_ID,
    });

    // Очікування завершення роботи Assistant
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    // Polling для очікування завершення
    while (runStatus.status === 'queued' || runStatus.status === 'in_progress') {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Чекаємо 1 секунду
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    if (runStatus.status !== 'completed') {
      throw new Error(`Assistant run failed with status: ${runStatus.status}`);
    }

    // Отримання відповіді
    const messages = await openai.beta.threads.messages.list(thread.id);
    const lastMessage = messages.data[0];

    if (!lastMessage || lastMessage.role !== 'assistant') {
      throw new Error('No assistant response found');
    }

    // Витягування тексту з відповіді
    const messageContent = lastMessage.content[0];
    if (messageContent.type !== 'text') {
      throw new Error('Unexpected message content type');
    }

    let aiResponse = messageContent.text.value?.trim();

    // Видалення citations у форматі 【x:y†source】
    if (aiResponse) {
      aiResponse = aiResponse.replace(/【\d+:\d+†[^】]*】/g, '').trim();
    }

    if (!aiResponse) {
      return NextResponse.json({ error: 'Не вдалося отримати відповідь від AI' }, { status: 500 });
    }

    return NextResponse.json({
      content: aiResponse,
    });
  } catch (error) {
    console.error('OpenAI API error:', error);

    // Обробка специфічних помилок OpenAI
    if (error instanceof Error) {
      if (error.message.includes('insufficient_quota')) {
        return NextResponse.json({ error: 'Вичерпано квоту API. Спробуйте пізніше.' }, { status: 503 });
      }

      if (error.message.includes('rate_limit_exceeded')) {
        return NextResponse.json({ error: 'Перевищено ліміт запитів. Спробуйте пізніше.' }, { status: 429 });
      }
    }

    return NextResponse.json({ error: 'Внутрішня помилка сервера' }, { status: 500 });
  }
}

// Обробка GET запитів (для тестування)
export async function GET() {
  return NextResponse.json({
    status: 'AI Chat API is running',
    timestamp: new Date().toISOString(),
  });
}
