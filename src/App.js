import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
			/>
			<Routes />
		</div>
	);
}

export default App;
