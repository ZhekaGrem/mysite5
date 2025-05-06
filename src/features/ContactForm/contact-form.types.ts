export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: string) => boolean | string;
}

export interface ValidationRules {
  name: ValidationRule;
  email: ValidationRule;
  message: ValidationRule;
}
