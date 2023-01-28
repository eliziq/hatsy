import { DefaultButton, InvertedButton, SpecialButton } from "./ButtonStyled";

export const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
  special: "special",
};

const getButton = (btn_type = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.special]: SpecialButton,
  }[btn_type]);

const Button = ({ children, btn_type, ...otherProps }) => {
  const CustomButton = getButton(btn_type);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
