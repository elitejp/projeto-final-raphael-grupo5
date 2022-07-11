import { StyledCardPet } from "./styles";

function CardPet({ pet }) {
  return (
    <StyledCardPet>
      <h2>{pet.nome}</h2>

      <div className="data-box">
        <h3>Tipo:</h3>
        <p>{pet.tipo}</p>
      </div>

      <div className="data-box">
        <h3>Raça:</h3>
        <p>{pet.raca}</p>
      </div>

      <div className="data-box">
        <h3>Idade:</h3>
        <p>{pet.idade}</p>
      </div>

      <div className="data-box">
        <h3>Porte:</h3>
        <p>{pet.porte_físico}</p>
      </div>

      <div className="obs-box">
        <h3>Observações e cuidados:</h3>
        <p>{pet.observações_cuidados}</p>
      </div>
    </StyledCardPet>
  );
}

export default CardPet;
