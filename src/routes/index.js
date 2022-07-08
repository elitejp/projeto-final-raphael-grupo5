import { Route, Router, Switch, useHistory } from "react-router-dom";
import DashboardCareGiver from "../pages/DashboardCareGiver";
import DashboardOwner from "../pages/DashboardOwner";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginCuidador from "../pages/Login_Cuidador";
import LoginDono from "../pages/Login_Dono";
import RegisterCareGiver from "../pages/RegisterCareGiver";
import RegisterOwner from "../pages/RegisterOwner";

function Routes() {
	const history = useHistory()

	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route exact path='/login'>
					<Login />
				</Route>

                <Route exact path="/register-care">
                    <RegisterCareGiver />
                </Route>

                <Route exact path="/login-care">
                <LoginCuidador/>
                </Route>

                <Route exact path="/login-dono">
                <LoginDono/>
                </Route>

				<Route exact path='/register-owner'>
					<RegisterOwner />
				</Route>

				<Route exact path='/dashboard-care'>
					<DashboardCareGiver />
				</Route>

				<Route exact path='/dashboard-owner'>
					<DashboardOwner />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
