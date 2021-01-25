import "./style.scss";

const InputField = ({
  isValid = true,
  label = "",
  notValidLabel = "Неверный ввод",
  ...props
}) => {
  return (
    <div className={`inputfield ${isValid ? "valid" : "not-valid"}`}>
      <input {...props} />
      <label>
        {label} {isValid && !props.value !== "" ? "" : notValidLabel}
      </label>
    </div>
  );
};

export default InputField;
