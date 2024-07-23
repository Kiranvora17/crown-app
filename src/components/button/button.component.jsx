import style from "./button.module.scss";

const BUTTON_TYPE = {
  google: style.googleSignIn,
  inverted: style.inverted,
};

const Button = ({ children, displayType, ...otherProps }) => {
  return (
    <button
      className={`${style.buttonContainer} ${BUTTON_TYPE[displayType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
