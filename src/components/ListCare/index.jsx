import CardCare from "../CardCare";
import { StyledListCare } from "./styles";

function ListCare({ careGivers }) {
  return (
    <StyledListCare>
      {careGivers?.map((careGiver) => (
        <CardCare key={careGiver.id} careGiver={careGiver} />
      ))}
    </StyledListCare>
  );
}

export default ListCare;
