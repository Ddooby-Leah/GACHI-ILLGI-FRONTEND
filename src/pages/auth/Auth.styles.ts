import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 420px;
  /* min-height: 470px; */

  border-radius: 5px;
  border: 1px solid #d9d9d9;

  padding: 40px;
`;

const LogoWrapper = styled.div`
  width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 10px;
`;
const HalfInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HalfInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 48%;

  margin-bottom: 10px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;

  color: #5a5a5d;
  font-size: 14px;

  margin-top: 15px;
  margin-bottom: 3px;

  &.agree {
    width: 350px;
    height: 50px;

    margin: 0;
    align-items: center;

    font-size: 15px;
    font-weight: 600;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 400px;
  height: 55px;

  margin-top: 15px;
`;

const Message = styled.span`
  color: ${COLORS["gray"]};
  margin-right: 10px;

  &.agree {
    color: ${COLORS["black085"]};
  }
`;

const Link = styled.a`
  color: ${COLORS["primary"]};
  cursor: pointer;
`;

/* 동의 화면 */
const AgreeContainer = styled.div`
  display: flex;

  width: 400px;
  height: 50px;

  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;

  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export {
  Container,
  LoginContainer,
  LogoWrapper,
  InputContainer,
  InputWrapper,
  Text,
  ButtonWrapper,
  Message,
  Link,
  AgreeContainer,
  IconContainer,
  HalfInputContainer,
  HalfInputWrapper,
};
