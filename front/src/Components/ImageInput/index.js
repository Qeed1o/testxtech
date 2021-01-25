import CameraSVG from "../../assets/camera.svg";

import "./style.scss";

const placeholder = () => (
  <>
    <div className="placeholder-wrapper">
      <div className="placeholder-image">
        <img src={CameraSVG} alt=""></img>
      </div>

      <div className="placeholder">Выберите файл</div>
    </div>
  </>
);

const ImageInput = ({ onChange = () => {}, src = "" }) => {
  const handleClick = ({ target }) => {
    document.getElementById("image-input").click();
  };

  return (
    <div className="image-input-wrapper" onClick={handleClick}>
      {src ? <img src={src} alt="" /> : placeholder(onChange)}
      <input
        name="avatar"
        type="file"
        id="image-input"
        accept=".jpg,.png"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default ImageInput;
