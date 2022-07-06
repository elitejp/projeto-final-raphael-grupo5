<<<<<<< HEAD
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<ToastContainer
				position="top-right"
=======
import Routes from './routes'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<ToastContainer
				position='top-right'
>>>>>>> 2250468 (feat: criação da pagina de registro do dono)
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
			/>
			<Routes />
		</div>
<<<<<<< HEAD
	);
=======
	)
>>>>>>> 2250468 (feat: criação da pagina de registro do dono)
}

export default App
