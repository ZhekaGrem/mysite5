// src/app/api/telegram/send/route.ts

import { NextResponse } from 'next/server';
import { ContactFormData } from '@/features/ContactForm/contact-form.types';

export async function POST(request: Request) {
  // Debug logging
  console.log('Environment variables check:');
  console.log('BOT_TOKEN exists:', !!process.env.TELEGRAM_BOT_TOKEN);
  console.log('CHAT_ID exists:', !!process.env.TELEGRAM_CHAT_ID);

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      {
        error: 'Telegram credentials not configured',
        debug: {
          botTokenExists: !!TELEGRAM_BOT_TOKEN,
          chatIdExists: !!TELEGRAM_CHAT_ID,
        },
      },
      { status: 500 }
    );
  }

  try {
    const data: ContactFormData = await request.json();

    // Debug logging
    console.log('Received form data:', {
      nameLength: data.name?.length,
      emailLength: data.email?.length,
      messageLength: data.message?.length,
    });

    const formattedMessage = `
🔔 New Contact Form My Personal Site

👤 Name: ${data.name}
📧 Email: ${data.email}
💬 Message: ${data.message}

📅 Sent at: ${new Date().toLocaleString()}
    `;

    // Debug logging
    console.log('Attempting to send to Telegram...');

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: formattedMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error response:', errorData);
      throw new Error(JSON.stringify(errorData));
    }

    console.log('Message sent successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error in telegram route:', error);
    return NextResponse.json(
      {
        error: 'Failed to process message',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
