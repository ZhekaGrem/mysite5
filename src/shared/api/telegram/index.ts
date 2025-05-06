import { ContactFormData } from '@/features/ContactForm/contact-form.types';

const token = process.env.TELEGRAM_BOT_TOKEN;
const id = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramMessage = async (data: ContactFormData): Promise<boolean> => {
  try {
    const message = `
      New message from website:
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: id,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Telegram API Error:', error);
    return false;
  }
};