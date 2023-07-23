import InputWithIcon from "@/components/atom/Input/InputWithIcon";
import * as L from "../Auth.styles";
import { useState } from "react";
import Icon from "@/components/atom/Icon/Icon";
import Input from "@/components/atom/Input/Input";
import Button from "@/components/atom/Button/Button";

function Join() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [passwordError, setPasswordError] = useState<boolean | string>(false);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);

    if (password !== e.target.value) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError(false);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleJoinClick = () => {
    alert(password);
  };

  return (
    <L.Container>
      <L.LoginContainer>
        <L.LogoWrapper>
          <Icon name="LOGO_LARGE" width="400px" height="117px"></Icon>
        </L.LogoWrapper>
        <L.InputContainer>
          <Input
            title="아이디"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={handleIdChange}
          ></Input>

          <InputWithIcon
            title="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          ></InputWithIcon>

          <InputWithIcon
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            error={passwordError}
          ></InputWithIcon>

          <Input
            title="닉네임"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={handleNicknameChange}
          ></Input>

          <L.HalfInputContainer>
            <L.HalfInputWrapper>
              <Input
                title="생일"
                placeholder="YYYY/MM/DD"
                value={birthday}
                onChange={handleBirthdayChange}
              ></Input>
            </L.HalfInputWrapper>

            <L.HalfInputWrapper>
              <Input
                title="성별"
                placeholder="여자 / 남자"
                value={gender}
                onChange={handleGenderChange}
              ></Input>
            </L.HalfInputWrapper>
          </L.HalfInputContainer>
        </L.InputContainer>
        <L.ButtonWrapper>
          <Button
            theme="primary"
            width="400px"
            height="50px"
            onClick={handleJoinClick}
          >
            회원가입
          </Button>
        </L.ButtonWrapper>
      </L.LoginContainer>
    </L.Container>
  );
}

export default Join;
