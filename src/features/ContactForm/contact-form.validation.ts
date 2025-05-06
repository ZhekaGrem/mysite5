import { ValidationRules } from './contact-form.types';

export const contactFormValidation: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    validate: (value: string) => value.trim().length >= 2 || 'Name must be at least 2 characters',
  },
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    validate: (value: string) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || 'Please enter a valid email address',
  },
  message: {
    required: true,
    minLength: 5,
    maxLength: 1000,
    validate: (value: string) => {
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      if (value.length > 1000) return 'Message must be less than 1000 characters';
      return true;
    },
  },
};
