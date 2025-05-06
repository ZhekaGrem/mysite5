// src/shared/api/telegram/index.ts

import { ContactFormData } from '@/features/ContactForm/contact-form.types';

export const sendTelegramMessage = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/telegram/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
};
