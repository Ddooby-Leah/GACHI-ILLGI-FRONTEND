import styled from "@emotion/styled";
import { InputProps } from "./Input.types";
import { COLORS } from "@/styles/colors";
import IconButton from "../Button/IconButton";

export const InputErrorMessageDiv = styled.div`
  color: ${COLORS["error"]};
  margin-left: 12px;
  line-height: 1.5;
  font-size: 14px;
`;

export const StyledInput = styled("input")<InputProps>`
  display: block;
  width: calc(100% - 34px);
  height: 24px;
  padding: 12px 16px;
  border: 0 none;
  border-radius: 5px;
  outline: none;

  border: 1px solid ${COLORS["dark"]};
  background-color: ${COLORS["lightgray"]};
  caret-color: ${COLORS["primary"]};

  &::placeholder {
    color: ${COLORS["gray"]};
  }

  &:focus {
    border: 1px solid ${COLORS["primary"]};
    background-color: transparent;
  }

  &:disabled {
  }

  &.error {
    border: 1px solid ${COLORS["error"]};
    background-color: ${COLORS["dark"]};
  }
`;

export const InputTitle = styled.div`
  display: flex;
  justify-content: space-between;

  color: #5a5a5d;
  font-size: 14px;

  margin-top: 15px;
  margin-bottom: 3px;
`;

/* Input with Icon */
export const PasswordWrapper = styled.div`
  display: flex;
  border-radius: 5px;

  border: 1px solid ${COLORS["dark"]};
  background-color: ${COLORS["lightgray"]};

  &.focus {
    border: 1px solid ${COLORS["primary"]};
    background-color: transparent;
  }

  &.error {
    border: 1px solid ${COLORS["error"]};
    background-color: ${COLORS["dark"]};
  }
`;

export const PasswordInput = styled.input`
  display: block;
  width: calc(100% - 34px);
  height: 24px;
  padding: 12px 16px;
  border: 0 none;
  border-radius: 5px;
  outline: none;

  background-color: transparent;
  caret-color: ${COLORS["primary"]};

  &::placeholder {
    color: ${COLORS["gray"]};
  }
`;

export const PasswordIconButton = styled(IconButton)`
  margin-right: 16px;
`;
