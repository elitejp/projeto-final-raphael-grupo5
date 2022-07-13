import { useHistory } from "react-router-dom";
import Logo from "../Logo";
import { StyledHeader } from "./styles";

function Header() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("Token");
    history.push("/");
  }

  return (
    <StyledHeader>
      <Logo />
      <div>
        <button onClick={logout}>Sair</button>
        <span>|</span>
        <button onClick={() => history.push("/")}>Dúvidas frequentes</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
