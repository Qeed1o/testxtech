import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import DasboardPage from "./Pages/DashboardPage";

import { redirectIfHaveCookie } from "./utils/cookies";
import { selectIsModalShow, selectCurrentUser } from "./store/selectors";
import { setIsModalShow } from "./store/actions";

import "./App.scss";
import ModalPage from "./Components/ModalView";
import { connect } from "react-redux";

const App = ({ isModalShow, currentUser, setModal }) => {
  redirectIfHaveCookie("User", "/dashboard");
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <DasboardPage />
          </Route>
          <Route path="/">
            <RegistrationPage />
          </Route>
        </Switch>
        {isModalShow ? (
          <ModalPage {...currentUser} closeModal={() => setModal(false)} />
        ) : null}
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isModalShow: selectIsModalShow(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setModal: (isShow) => dispatch(setIsModalShow(isShow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
