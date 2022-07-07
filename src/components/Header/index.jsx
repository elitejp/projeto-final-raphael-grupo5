import Logo from "../Logo";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <div>
        <button>Sair</button>
        <span>|</span>
        <button>Dúvidas frequentes</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
