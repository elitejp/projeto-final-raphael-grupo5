import { Route, Router, Switch, useHistory } from "react-router-dom";
import DashboardCareGiver from "../pages/DashboardCareGiver";
import DashboardOwner from "../pages/DashboardOwner";
import LoginCuidador from "../pages/Login_Cuidador";
import LoginDono from "../pages/Login_Dono";
import RegisterCareGiver from "../pages/RegisterCareGiver";
import RegisterOwner from "../pages/RegisterOwner";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";

function Routes() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/register-care">
          <RegisterCareGiver />
        </Route>

        <Route exact path="/login-care">
          <LoginCuidador />
        </Route>

        <Route exact path="/register-owner">
          <RegisterOwner />
        </Route>

        <Route exact path="/login-dono">
          <LoginDono />
        </Route>

        <Route exact path="/dashboard-care">
          <DashboardCareGiver />
        </Route>

        <Route exact path="/dashboard-owner">
          <DashboardOwner />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
