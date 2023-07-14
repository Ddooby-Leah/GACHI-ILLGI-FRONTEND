import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  theme = "default",
  shape = "rounded",
  size = "medium",
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.StyledButton
      theme={theme}
      shape={shape}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
