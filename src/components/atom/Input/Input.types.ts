export interface InputProps {
  width?: number;
  height?: number;
  title?: string;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
  error?: boolean | string | null;
  disabled?: boolean;
  initValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface InputWithIconProps {
  width?: number;
  height?: number;
  title?: string;
  value?: string;
  placeholder?: string;
  error?: boolean | string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
