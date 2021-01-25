import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getUsers as getUsersAction,
  getUser as getUserAction,
  setIsModalShow,
} from "../../store/actions";
import { getCookie } from "../../utils/cookies";

import { selectUsers } from "../../store/selectors";

import "./style.scss";
import TableControls from "../../Components/TableControls";

const header = {
  id: "ID",
  name: "Имя",
  secondName: "Фамилия",
  patronymicName: "Отчество",
  phone: "Телефон",
  email: "Email",
  about: "О себе",
};

const row = ({
  _id,
  id = "-",
  name = "-",
  secondName = "-",
  patronymicName = "-",
  phone = "-",
  email = "-",
  accessor,
}) => (
  <div className="row" onClick={() => accessor(_id)} key={_id}>
    <div className="column id">
      <p>{id}</p>
    </div>
    <div className="column name">
      <p className="value-text">{name}</p>
    </div>
    <div className="column secondName">
      <p className="value-text">{secondName}</p>
    </div>
    <div className="column patronymicName">
      <p className="value-text">{patronymicName}</p>
    </div>
    <div className="column phone">
      <p className="value-text">{phone}</p>
    </div>
    <div className="column email">
      <p className="value-text">{email}</p>
    </div>
  </div>
);

const rows = (users, currentPage = 0, accessor = () => {}) =>
  users.map((user, index) =>
    row({ ...user, id: currentPage * 10 + index + 1, accessor })
  );

const DashboardPage = ({ getUsers, users, setModal, getUser }) => {
  if (!getCookie("User")) window.location.pathname = "/";

  const [page, setPage] = useState(0);

  const rowAccessor = (id) => {
    getUser(id);
    setModal(true);
  };

  useEffect(() => {
    getUsers(page);
  }, [getUsers, page]);

  return (
    <div className="content">
      <h1 className="table-name">Список пользователей</h1>
      <div className="table">
        <div className="table-head">{row(header)}</div>
        <div className="table-content">
          {rows(users || [], page, rowAccessor)}
        </div>
        <div className="table-footer">
          <div className="row">
            <TableControls
              currentPage={page}
              prevLabel="Назад"
              nextLabel="Вперёд"
              onNextClick={() => {
                if (users.length < 10) return;
                setPage(page + 1);
              }}
              onPrevClick={() => {
                if (page === 0) return;
                setPage(page - 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page) => getUsersAction(dispatch, page),
  getUser: (id) => getUserAction(dispatch, id),
  setModal: (isShow) => dispatch(setIsModalShow(isShow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
