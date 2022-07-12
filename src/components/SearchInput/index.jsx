import Button from "../Button";
import Input from "../Input";
import { StyledSearchInput } from "./styles";

function SearchInput() {
  return (
    <StyledSearchInput>
      <Input
        label=""
        register={() => ""}
        name=""
        placeholder="Pesquise seu Endereço"
      />
      <Button>Lupa</Button>
    </StyledSearchInput>
  );
}

export default SearchInput;
