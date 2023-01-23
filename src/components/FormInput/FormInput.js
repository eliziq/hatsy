import "./FormInput.scss";

const FormInput = ({ children, ...inputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} required />
      <label
        className={`${
          inputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {children}
      </label>
    </div>
  );
};

export default FormInput;
