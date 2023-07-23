import Icon from "@/components/atom/Icon/Icon";
import * as S from "../Auth.styles";
import Button from "@/components/atom/Button/Button";
import IconButton from "@/components/atom/Button/IconButton";
import { useState } from "react";
import { KeyOfSVGS } from "@/assets";
import { useNavigate } from "react-router-dom";

function Agree() {
  const [termIcon, setTermIcon] = useState<KeyOfSVGS>("CHECKED_NOT");
  const [privacyIcon, setPrivacyIcon] = useState<KeyOfSVGS>("CHECKED_NOT");

  const navigate = useNavigate();

  const handleTermOfUseIconClick = () => {
    termIcon === "CHECKED_NOT"
      ? setTermIcon("CHECKED")
      : setTermIcon("CHECKED_NOT");
  };

  const handlePrivacyPolicyIconClick = () => {
    privacyIcon === "CHECKED_NOT"
      ? setPrivacyIcon("CHECKED")
      : setPrivacyIcon("CHECKED_NOT");
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  const handleConfirmClick = () => {
    navigate("/join");
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoWrapper>
          <Icon name="LOGO_LARGE" width="400px" height="117px"></Icon>
        </S.LogoWrapper>
        <S.AgreeContainer>
          <S.IconContainer>
            <IconButton
              name={termIcon}
              width="20px"
              height="20px"
              onClick={handleTermOfUseIconClick}
            ></IconButton>
          </S.IconContainer>
          <S.Text></S.Text>
          <S.Text className="agree">
            <S.Message className="agree">
              가치읽기 이용약관 동의 (필수)
            </S.Message>
            <S.Link>보기</S.Link>
          </S.Text>
        </S.AgreeContainer>
        <S.AgreeContainer>
          <S.IconContainer>
            <IconButton
              name={privacyIcon}
              width="20px"
              height="20px"
              onClick={handlePrivacyPolicyIconClick}
            ></IconButton>
          </S.IconContainer>
          <S.Text className="agree">
            <S.Message className="agree">
              가치읽기 개인정보처리방침 동의 (필수)
            </S.Message>
            <S.Link>보기</S.Link>
          </S.Text>
        </S.AgreeContainer>
        <S.ButtonWrapper>
          <Button
            theme="dark"
            width="195px"
            height="50px"
            onClick={handleCancelClick}
          >
            취소
          </Button>
          <Button
            theme="primary"
            width="195px"
            height="50px"
            onClick={handleConfirmClick}
            disabled={termIcon !== "CHECKED" || privacyIcon !== "CHECKED"}
          >
            확인
          </Button>
        </S.ButtonWrapper>
      </S.LoginContainer>
    </S.Container>
  );
}

export default Agree;
