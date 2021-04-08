import CameraSVG from "../../assets/camera.svg";
import { useRef, useState, useCallback } from "react"

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

const ImageInput = () => {
  const imageInput = useRef();
  const [src, setSrc] = useState();

  const onChange= useCallback(({ target }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSrc(reader.result);
    };
    target.files[0] ? reader.readAsDataURL(target.files[0]) : setSrc(null)
  }, [])

  const handleClick = useCallback(() => {
    imageInput.current.click();
  }, []);

  return (
    <div className="image-input-wrapper" onClick={handleClick}>
      {src ? <img src={src} alt="" /> : placeholder(onChange)}
      <input
        name="avatar"
        type="file"
        ref={imageInput}
        id="image-input"
        accept=".jpg,.png"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default ImageInput;
