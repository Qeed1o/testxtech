import { useState } from "react";

import InputField from "../../Components/InputField";

import {
  isValidTextField,
  isValidPhoneNumber,
  isValidEmail,
} from "../../utils/validation";

import "./style.scss";
import ImageInput from "../../Components/ImageInput";

const initialTextField = { isValid: true, value: "" };

const handleTextFieldChange = ({ target: { value } }, setTextFieldValue) => {
  setTextFieldValue({ isValid: isValidTextField(value), value });
};

const handlePhoneChange = ({ target: { value } }, setPhoneNumber) => {
  setPhoneNumber({ isValid: isValidPhoneNumber(value), value });
};

const handleEmailChange = ({ target: { value } }, setEmail) => {
  setEmail({ isValid: isValidEmail(value), value });
};

const RegistrationPage = () => {
  const [name, setName] = useState(initialTextField);
  const [secondName, setSecondName] = useState(initialTextField);
  const [patronymicName, setPatronymicName] = useState(initialTextField);
  const [phoneNumber, setPhoneNumber] = useState(initialTextField);
  const [email, setEmail] = useState(initialTextField);
  const [about, setAbout] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = [
      name,
      secondName,
      patronymicName,
      phoneNumber,
      email,
    ].every(({ value, isValid }) => value !== "" && isValid);
    if (isValid) {
      e.target.submit();
    }
  };

  return (
    <div className="content">
      <div className="form-wrapper">
        <div className="form-header">
          <h1>Создание профиля</h1>
        </div>
        <div className="form-content">
          <form
            action="http://localhost:8081/register/"
            method="POST"
            onSubmit={onSubmit}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="column form-image">
                <ImageInput
                  onChange={({ target }) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                      setFile(reader.result);
                    };
                    reader.readAsDataURL(target.files[0]);
                  }}
                  src={file}
                />
              </div>
              <div className="column form-inputs">
                <InputField
                  label="Имя"
                  placeholder="Имя"
                  id="name"
                  name="name"
                  type="text"
                  notValidLabel="не может содержать цифры"
                  {...name}
                  onChange={(e) => handleTextFieldChange(e, setName)}
                />
                <InputField
                  label="Фамилия"
                  placeholder="Фамилия"
                  id="secondName"
                  name="secondName"
                  type="text"
                  notValidLabel="не может содержать цифры"
                  {...secondName}
                  onChange={(e) => handleTextFieldChange(e, setSecondName)}
                />
                <InputField
                  label="Отчество"
                  placeholder="Отчество"
                  id="patronymicName"
                  name="patronymicName"
                  type="text"
                  notValidLabel="не может содержать цифры"
                  {...patronymicName}
                  onChange={(e) => handleTextFieldChange(e, setPatronymicName)}
                />
                <InputField
                  label="Телефон"
                  placeholder="Телефон"
                  id="phone"
                  name="phone"
                  type="text"
                  notValidLabel="имеет неверный формат"
                  {...phoneNumber}
                  onChange={(e) => handlePhoneChange(e, setPhoneNumber)}
                />
                <InputField
                  label="Email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  notValidLabel="некорректный"
                  {...email}
                  onChange={(e) => handleEmailChange(e, setEmail)}
                />
              </div>
            </div>
            <div className="row">
              <textarea
                name="about"
                id="about"
                placeholder="Расскажите о себе"
                value={about}
                onChange={({ target: { value } }) => setAbout(value)}
              />
            </div>
            <div className="row submit-button">
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
