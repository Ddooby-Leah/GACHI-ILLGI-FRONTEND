import Button from "./Button";
import Icon from "../Icon/Icon";
import { IconButtonProps } from "./Button.types";

const IconButton = ({
  name,
  width,
  height,
  ...buttonProps
}: IconButtonProps) => {
  return (
    <Button theme="none" size="none" shape="none" {...buttonProps}>
      <Icon name={name} width={width} height={height}></Icon>
    </Button>
  );
};

export default IconButton;
