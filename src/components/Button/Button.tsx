import { FC, ButtonHTMLAttributes } from "react";
import {
  DefaultButton,
  InvertedButton,
  SpecialButton,
  ButtonSpinner,
} from "./ButtonStyled";

export enum BUTTON_TYPE_CLASSES {
  default = "default",
  inverted = "inverted",
  special = "special",
}

const getButton = (
  btn_type = BUTTON_TYPE_CLASSES.default
): typeof DefaultButton =>
  ({
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.special]: SpecialButton,
  }[btn_type]);

export type ButtonProps = {
  btn_type?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  btn_type,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(btn_type);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
