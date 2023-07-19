export interface InputProps {
  width?: number;
  height?: number;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
  error?: boolean | string | null;
  disabled?: boolean;
  initValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
