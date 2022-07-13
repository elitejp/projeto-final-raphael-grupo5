import { useState, useEffect } from "react";
import { getCareGiver } from "../../services/apiCare";
import Header from "../../components/Header";
import ListCare from "../../components/ListCare";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
import { StyledDiv } from "./style";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [careGivers, setCareGivers] = useState([]);
  const [filterCareGivers, setFilterCareGivers] = useState([]);

  const filterCare = (address) => {
    setFilterCareGivers(
      careGivers.filter((care) =>
        care.address.toLowerCase().includes(address.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const careToken = localStorage.getItem("Token");

    if (careToken) {
      getCareGiver(careToken)
        .then((res) => setCareGivers(res))
        .then(() => setFilterCareGivers(careGivers));

      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <StyledDiv>
      <Header />
      <Button
        isGray
        className="btn-user"
        onClick={() => history.push("/dashboard-owner")}
      >
        Área do Usuário
      </Button>
      <SearchInput filterCare={filterCare} />
      <ListCare careGivers={filterCareGivers} />
    </StyledDiv>
  );
}

export default Home;
