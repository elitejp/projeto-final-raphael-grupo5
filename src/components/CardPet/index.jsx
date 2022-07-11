import Button from "../Button";
import { StyledCardPet, StyledDiv} from "./styles";


function CardPet({ pet,id, modalEditar ,modalDeletar}) {

  
  return (
    <StyledCardPet>
      
      <h2>{pet.name}</h2>

      <div className="data-box">
        <h3>Tipo:</h3>
        <p>{pet.type}</p>
      </div>

      <div className="data-box">
        <h3>Raça:</h3>
        <p>{pet.breed}</p>
      </div>

      <div className="data-box">
        <h3>Idade:</h3>
        <p>{pet.age}</p>
      </div>

      <div className="data-box">
        <h3>Porte:</h3>
        <p>{pet.size}</p>
      </div>

      <div className="obs-box">
        <h3>Observações e cuidados:</h3>
        <p>{pet.obs_care}</p>
      </div>

      <div className="divbtn">
        <button onClick={()=>modalDeletar(pet,id)}>Deletar</button>
        <button onClick={()=>modalEditar(pet,id)}>Editar</button>
      </div>
        
     
        
      
        
      

      
    </StyledCardPet>
  );
}

export default CardPet;
