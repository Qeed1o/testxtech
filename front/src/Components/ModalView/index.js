import { getImageSRC } from "../../utils/other";

import "./style.scss";

const ModalPage = ({
  avatar,
  name,
  secondName,
  patronymicName,
  phone,
  email,
  about,
  closeModal,
}) => {
  return (
    <div className="content modal" onClick={() => closeModal()}>
      <div className="modal-wrapper">
        <div className="modal-name">Профиль</div>
        <div className="row">
          <div className="column image">
            <img src={getImageSRC(avatar)} alt="" />
          </div>
          <div className="column text">
            <div className="row with-placeholder">
              <div className="with-placeholder">
                <label className="placeholder">Имя</label>
                {name}
              </div>
            </div>
            <div className="row with-placeholder">
              <div className="with-placeholder">
                <label className="placeholder">Фамилия</label>
                {secondName}
              </div>
            </div>
            <div className="row with-placeholder">
              <div className="with-placeholder">
                <label className="placeholder">Отчество</label>
                {patronymicName}
              </div>
            </div>
            <div className="row with-placeholder">
              <div className="with-placeholder">
                <label className="placeholder">Телефон</label>
                {phone}
              </div>
            </div>
            <div className="row">
              <div className="with-placeholder">
                <label className="placeholder">Email</label>
                {email}
              </div>
            </div>
          </div>
        </div>
        <div className="row about">{about}</div>
      </div>
    </div>
  );
};

export default ModalPage;
