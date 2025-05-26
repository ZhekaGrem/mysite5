// src/features/AiChat/api/chatApi.ts
interface ChatResponse {
  content: string;
  error?: string;
  detectedLanguage?: string;
  responseLanguage?: string;
}

export async function sendChatMessage(message: string, locale?: string): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        locale: locale || 'uk', // default to Ukrainian
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return {
      content: data.content || 'Вибачте, не зміг сформувати відповідь.',
      detectedLanguage: data.detectedLanguage,
      responseLanguage: data.responseLanguage,
    };
  } catch (error) {
    console.error('Chat API error:', error);

    // Error messages based on locale
    const errorMessages = {
      uk: 'Вибачте, сталася помилка. Спробуйте пізніше.',
      en: 'Sorry, an error occurred. Please try again later.',
      pl: 'Przepraszamy, wystąpił błąd. Spróbuj ponownie później.',
      ru: 'Извините, произошла ошибка. Попробуйте позже.',
    };

    const errorMsg = errorMessages[locale as keyof typeof errorMessages] || errorMessages.uk;

    return {
      content: errorMsg,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// src/features/AiChat/api/index.ts
