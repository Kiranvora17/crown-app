import style from "./form-input.module.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className={style.group}>
      <input className={style.formInput} {...inputProps} />
      <label
        className={`${style.formInputLabel} ${
          inputProps.value.length ? style.shrink : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
