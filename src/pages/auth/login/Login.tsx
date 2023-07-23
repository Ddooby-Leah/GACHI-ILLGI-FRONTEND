import Input from "@/components/atom/Input/Input";
import * as S from "../Auth.styles";
import Button from "@/components/atom/Button/Button";
import { useState } from "react";
import Icon from "@/components/atom/Icon/Icon";
import InputWithIcon from "@/components/atom/Input/InputWithIcon";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState<string>("");
  const [, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {};

  const handleJoinClick = () => {
    navigate("/join/agree");
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoWrapper>
          <Icon name="LOGO_LARGE" width="400px" height="117px"></Icon>
        </S.LogoWrapper>
        <S.InputContainer>
          <S.InputWrapper>
            <Input
              title="아이디"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={handleIdChange}
            ></Input>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text>
              비밀번호
              <S.Link>비밀번호 찾기</S.Link>
            </S.Text>
            <InputWithIcon onChange={handlePasswordChange}></InputWithIcon>
          </S.InputWrapper>
        </S.InputContainer>
        <S.ButtonWrapper>
          <Button
            theme="primary"
            width="400px"
            height="50px"
            onClick={handleLoginClick}
          >
            로그인
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button theme="kakao" width="400px" height="50px">
            카카오 로그인 / 회원가입
          </Button>
        </S.ButtonWrapper>
        <S.Text>
          <S.Message>계정이 없으신가요?</S.Message>
          <S.Link onClick={handleJoinClick}>회원가입</S.Link>
        </S.Text>
      </S.LoginContainer>
    </S.Container>
  );
}

export default Login;
