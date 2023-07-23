import { ReactComponent as SHOW_PASSWORD } from "./show_password.svg";
import { ReactComponent as HIDE_PASSWORD } from "./hide_password.svg";
import { ReactComponent as LOGO_LARGE } from "./logo_large.svg";
import { ReactComponent as CHECKED } from "./checked.svg";
import { ReactComponent as CHECKED_NOT } from "./checked_not.svg";

const SVGS = { SHOW_PASSWORD, HIDE_PASSWORD, LOGO_LARGE, CHECKED, CHECKED_NOT };

export default SVGS;
export type KeyOfSVGS = keyof typeof SVGS;
