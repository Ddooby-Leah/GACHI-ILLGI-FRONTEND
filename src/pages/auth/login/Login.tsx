import Input from "@/components/atom/Input/Input";
import * as S from "../Auth.styles";
import Button from "@/components/atom/Button/Button";
import { useState } from "react";
import Icon from "@/components/atom/Icon/Icon";
import InputWithIcon from "@/components/atom/Input/InputWithIcon";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/api/auth";

function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    login();
  };

  const handleKakaoLoginClick = () => {
    window.location.href = LINK;
  };

  const handleJoinClick = () => {
    navigate("/join/agree");
  };

  async function login() {
    const user = {
      email: id,
      password: password,
      kakaoUser: false,
    };

    try {
      const response = await axiosInstance.post("/api/auth/login", user);
      console.log(response);
      if (response.data.code === "1") {
        navigate("/");
      } else {
        /* TODO: Alert 컴포넌트화 */
        const title = response.data.shortMessage;
        const message = response.data.longMessage;

        alert(title);
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          <Button
            theme="kakao"
            width="400px"
            height="50px"
            onClick={handleKakaoLoginClick}
          >
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
