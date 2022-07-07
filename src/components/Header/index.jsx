import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <h1>
        i<span>Pet</span>
      </h1>
      <div>
        <button>Sair</button>
        <span>|</span>
        <button>Dúvidas frequentes</button>
      </div>
    </StyledHeader>
  );
}

export default Header;