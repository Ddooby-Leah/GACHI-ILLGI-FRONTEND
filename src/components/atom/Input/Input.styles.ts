import styled from "@emotion/styled";
import { InputProps } from "./Input.types";
import { COLORS } from "@/styles/colors";

export const InputErrorMessageDiv = styled.div`
  color: ${COLORS["error"]};
  margin-left: 12px;
  line-height: 2;
`;

export const StyledInput = styled("input")<InputProps>`
  display: block;
  width: 95%;
  height: 100%;
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
