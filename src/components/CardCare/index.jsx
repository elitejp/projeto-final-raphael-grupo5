import { useState } from "react";
import Button from "../Button";
import ModalDate from "../ModalDate";
import ReviewStars from "../ReviewStars";
import { StyledCardCare } from "./styles";

function CardCare({ careGiver}) {
  const [modalDate, setMdate] = useState(false)

  return (
    <>
    {modalDate && <ModalDate setMdate={setMdate} dadosDate={careGiver}/>}
    <StyledCardCare>
      <div className="img-review">
        <img
          src="https://sm.ign.com/ign_br/screenshot/default/goku_trw2.jpg"
          alt={careGiver.name}
          />
        <ReviewStars reviewPoints={4} />
        <p>{3} Avaliações</p>
      </div>

      <div className="full-detatils">
        <div className="name-address">
          <h2>{careGiver.name}</h2>
          <p>{careGiver.address}</p>
        </div>

        <p className="details">
          Detalhes: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Cumque unde voluptatum veniam distinctio magnam architecto impedit,
          sint labore adipisci, corrupti cum possimus nesciunt voluptas. Unde ab
          quia ipsam voluptatibus ducimus.{careGiver.address}
        </p>

        <div className="btn-price">
          <Button w="100px" onClick={() => setMdate(!modalDate)}>Reservar</Button>
          <h2>{"R$ 20,00"} / dia</h2>
        </div>
      </div>
    </StyledCardCare>
    </>
  );
}

export default CardCare;
