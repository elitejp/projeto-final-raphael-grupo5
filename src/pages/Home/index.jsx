import { useState, useEffect } from "react";
import { getCareGiver } from "../../services/apiCare";
import Header from "../../components/Header";
import ListCare from "../../components/ListCare";
import SearchInput from "../../components/SearchInput";

function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [careGivers, setCareGivers] = useState([]);

  useEffect(() => {
    const careToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjU3NjQwMjY4LCJleHAiOjE2NTc2NDM4NjgsInN1YiI6IjEifQ.fKsD_GcxJkOvnfn3dNQ-gtXnNTPQP47_48u609sEzwY";
    //localStorage.getItem("Token");

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
