import * as S from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = ({
  type = "text",
  placeholder = "",
  error = false,
  disabled = false,
  initValue,
  onChange,
}: InputProps) => {
  return (
    <>
      <S.StyledInput
        defaultValue={initValue}
        type={type}
        disabled={disabled}
        className={!!error ? "error" : ""}
        placeholder={placeholder}
        onChange={onChange}
      ></S.StyledInput>
      {error && typeof error === "string" && (
        <S.InputErrorMessageDiv>{error}</S.InputErrorMessageDiv>
      )}
    </>
  );
};

export default Input;
