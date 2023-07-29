import { useState } from "react";
import * as S from "./Input.styles";
import { InputWithIconProps } from "./Input.types";
import { KeyOfSVGS } from "@/assets";
import cn from "classnames";

const InputWithIcon = ({
  value,
  title,
  error,
  disabled = false,
  placeholder = "비밀번호를 입력해주세요.",
  onChange,
}: InputWithIconProps) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [eyeButtonName, setEyeButtonName] =
    useState<KeyOfSVGS>("SHOW_PASSWORD");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleEyeBtnClick = () => {
    passwordType === "text"
      ? setPasswordType("password")
      : setPasswordType("text");
    eyeButtonName === "SHOW_PASSWORD"
      ? setEyeButtonName("HIDE_PASSWORD")
      : setEyeButtonName("SHOW_PASSWORD");
  };

  return (
    <>
      {title && <S.InputTitle>{title}</S.InputTitle>}
      <S.PasswordWrapper className={cn({ focus: isFocus }, { error: !!error })}>
        <S.PasswordInput
          placeholder={placeholder}
          value={value}
          type={passwordType}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
        ></S.PasswordInput>
        <S.PasswordIconButton
          name={eyeButtonName}
          width="32px"
          height="32px"
          onClick={handleEyeBtnClick}
        ></S.PasswordIconButton>
      </S.PasswordWrapper>
      {error && typeof error === "string" && (
        <S.InputErrorMessageDiv>{error}</S.InputErrorMessageDiv>
      )}
    </>
  );
};

export default InputWithIcon;
