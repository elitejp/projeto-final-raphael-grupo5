import Button from "../Button";
import { StyledUserHeader } from "./styles";

function UserHeader({ name, userType, setmodalCreatePet }) {
  return (
    <StyledUserHeader>
      <div>
        <h2>{userType === "owner" ? "Dono dos pets" : "Cuidador"}</h2>
        <h2>{name}</h2>
      </div>

      <div>
        <h3>
          {userType === "owner" ? "Pets cadastrados" : "Donos interessados"}
        </h3>
        {userType === "owner" ? (
          <Button w="200px" m="0" onClick={() => setmodalCreatePet(true)}>
            Adicionar Pet
          </Button>
        ) : (
          <h3>Cuide bem deles</h3>
        )}
      </div>
    </StyledUserHeader>
  );
}

export default UserHeader;
