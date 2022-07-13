import Button from "../Button";
import Input from "../Input";
import { StyledSearchInput } from "./styles";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";

function SearchInput({ filterCare }) {
  const [searchAddress, setSearchAddress] = useState("");
  return (
    <StyledSearchInput>
      <Input
        label=""
        register={() => ""}
        name=""
        placeholder="Pesquise seu Endereço"
        value={searchAddress}
        onChange={(event) => setSearchAddress(event.target.value)}
      />
      <Button w="50px" m="0" onClick={() => filterCare(searchAddress)}>
        <FaSearchLocation />
      </Button>
    </StyledSearchInput>
  );
}

export default SearchInput;
