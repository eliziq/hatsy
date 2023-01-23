import "./Button.scss";

//default
//inverted
//special

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
  special: "special",
};

const Button = ({ children, btn_type, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[btn_type]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
