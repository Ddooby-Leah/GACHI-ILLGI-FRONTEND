import SVGS from "@/assets";
import * as S from "./Icon.styles";
import { SVGIconProps, IconProps } from "./Icon.types";

const SvgIcon = ({ svgComponent: Svg, width, height }: SVGIconProps) => {
  return <Svg width={width} height={height} aria-hidden={true}></Svg>;
};

const Icon = ({ name, width = "20px", height = "20px" }: IconProps) => {
  const svgComponent = SVGS[name];
  return (
    <S.IconWrapper>
      <SvgIcon
        svgComponent={svgComponent}
        width={width}
        height={height}
      ></SvgIcon>
    </S.IconWrapper>
  );
};

export default Icon;
