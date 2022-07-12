import CardPet from "../CardPet";
import { StyledDataBox, StyledListPets } from "./styles";

function ListPets({ children,  modalEditar ,modalDeletar,pets, ...rest }) {
  return (
    <StyledDataBox {...rest}>
      {children}

      <div className="pets-number">
        <h3>Numero de pets: </h3>
        <p>{pets?.length}</p>
      </div>

      <StyledListPets>
        {pets?.map((pet) => (
          <CardPet  key={pet.id} id={pet.id} pet={pet} modalEditar={modalEditar} modalDeletar={modalDeletar} />
        ))}
      </StyledListPets>
    </StyledDataBox>
  );
}

export default ListPets;
