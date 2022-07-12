import { useState, useEffect } from "react";
import { getCareGiver } from "../../services/apiCare";
import Header from "../../components/Header";
import ListCare from "../../components/ListCare";
import SearchInput from "../../components/SearchInput";

function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [careGivers, setCareGivers] = useState([]);

  useEffect(() => {
    const careToken = localStorage.getItem("Token");

    if (careToken) {
      getCareGiver(careToken).then((res) => setCareGivers(res));

      return setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <>
      <Header />
      <SearchInput />
      <ListCare careGivers={careGivers} />
    </>
  );
}

export default Home;
