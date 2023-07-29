import { KeyOfSVGS } from "@/assets";
import { FunctionComponent, SVGProps } from "react";

export interface SVGIconProps {
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  width?: string | number;
  height?: string | number;
}

export interface IconProps {
  name: KeyOfSVGS;
  width?: string | number;
  height?: string | number;
}
