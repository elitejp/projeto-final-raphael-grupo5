import CardPet from "../CardPet";
import { StyledDataBox, StyledListPets } from "./styles";

function ListPets({ children, pets, ...rest }) {
  return (
    <StyledDataBox {...rest}>
      {children}

      <div className="pets-number">
        <h3>Numero de pets: </h3>
        <p>{pets?.length}</p>
      </div>

      <StyledListPets>
        {pets?.map((pet) => (
          <CardPet key={pet.id} pet={pet} />
        ))}
      </StyledListPets>
    </StyledDataBox>
  );
}

export default ListPets;
