import InputWithIcon from "@/components/atom/Input/InputWithIcon";
import * as L from "../Auth.styles";
import { useEffect, useState } from "react";
import Icon from "@/components/atom/Icon/Icon";
import Input from "@/components/atom/Input/Input";
import Button from "@/components/atom/Button/Button";
import axiosInstance from "@/api/auth";
import { useLocation, useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  /* 회원가입 활성화 */
  const [idError, setIdError] = useState<boolean | string>(false);
  const [passwordError] = useState<boolean | string>(false);
  const [passwordCheckError, setPasswordCheckError] = useState<
    boolean | string
  >(false);
  const [nicknameError] = useState<boolean | string>(false);
  const [birthdayError, setBirthdayError] = useState<boolean | string>(false);
  const [genderError, setGenderError] = useState<boolean | string>(false);

  useEffect(() => {
    if (state !== null) {
      setId(state);
    }
  }, []);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);

    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regExp.test(e.target.value)) {
      setIdError("이메일 형식으로 입력해주세요.");
    } else {
      setIdError(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);

    if (password !== e.target.value) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError(false);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);

    const regExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!regExp.test(e.target.value)) {
      setBirthdayError("YYYY-MM-DD 으로 입력해주세요.");
    } else {
      setBirthdayError(false);
    }
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);

    if (!(e.target.value === "여자" || e.target.value === "남자")) {
      setGenderError("여자/남자 중 입력해주세요.");
    } else {
      setGenderError(false);
    }
  };

  const handleJoinClick = () => {
    if (state !== null) {
      kakaoSignUp();
    } else {
      signUp();
    }
  };

  async function kakaoSignUp() {
    const user = {
      email: state,
      nickname: nickname,
      sex: gender,
      birthday: birthday,
    };

    try {
      const response = await axiosInstance.post(
        "/api/auth/signup/add-detail",
        user
      );
      console.log(response);
      if (response.data.code === "1") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp() {
    const user = {
      email: id,
      password: password,
      nickname: nickname,
      sex: gender,
      birthday: birthday,
      profileImageUrl: "",
      isOAuthUser: false,
    };

    const sendEmail = {
      nickname: nickname,
      email: id,
    };

    try {
      const response = await axiosInstance.post("/api/auth/signup", user);
      if (response.data.code === "1") {
        const response2 = await axiosInstance.post(
          "/api/auth/send-mail",
          sendEmail
        );

        if (response2.data.code === "1") {
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <L.Container>
      <L.LoginContainer>
        <L.LogoWrapper>
          <Icon name="LOGO_LARGE" width="400px" height="117px"></Icon>
        </L.LogoWrapper>
        <L.InputContainer>
          <Input
            title="아이디"
            placeholder="아이디를 입력해주세요. (이메일)"
            initValue={id}
            onChange={handleIdChange}
            error={idError}
            disabled={state !== null}
          ></Input>

          <InputWithIcon
            title="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            disabled={state !== null}
          ></InputWithIcon>

          <InputWithIcon
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            error={passwordCheckError}
            disabled={state !== null}
          ></InputWithIcon>

          <Input
            title="닉네임"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={handleNicknameChange}
            error={nicknameError}
          ></Input>

          <L.HalfInputContainer>
            <L.HalfInputWrapper>
              <Input
                title="생일"
                placeholder="YYYY-MM-DD"
                value={birthday}
                onChange={handleBirthdayChange}
                error={birthdayError}
              ></Input>
            </L.HalfInputWrapper>

            <L.HalfInputWrapper>
              <Input
                title="성별"
                placeholder="여자 / 남자"
                value={gender}
                onChange={handleGenderChange}
                error={genderError}
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
            disabled={
              !!idError ||
              !!passwordError ||
              !!passwordCheckError ||
              !!nicknameError ||
              !!birthdayError ||
              !!genderError
            }
          >
            회원가입
          </Button>
        </L.ButtonWrapper>
      </L.LoginContainer>
    </L.Container>
  );
}

export default Join;
