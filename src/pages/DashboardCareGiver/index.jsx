import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { apiCare } from "../../services";
import ContainerDashboardCareGiver from "../../styles/styleDashboardCareGiver";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function DashboardCareGiver() {
  const history = useHistory();
  const token = localStorage.getItem("Token");
  const user = JSON.parse(localStorage.getItem("User"));
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {
    apiCare
      .get(`/users/${user.id}?_embed=request`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRequests(response.data.request);
        if (response.data.request.length === 0) {
          setShowRequests(false);
        } else {
          setShowRequests(true);
        }
      })
      .catch((err) => {
        if (err.response.data === "jwt expired") {
          toast.error("Seu login expirou! logue novamente.");
        }
      });
  }, [user.id, token, requests]);

  function deleteRequest(id) {
    apiCare
      .delete(`/request/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Recusado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado!");
      });
  }

  function acceptRequest(data) {
    const user = {
      email: data.email,
      name: data.name,
      telephone: data.telephone,
      age: data.age,
      initial_date: data.initial_date,
      final_date: data.final_date,
      userId: data.userId,
      pet: data.pet,
    };

    apiCare
      .post("/accepted", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Aceito com sucesso!");
        deleteRequest(data.id);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado!");
      });
  }

  return (
    <>
      <Header />
      <ContainerDashboardCareGiver>
        <div className="container">
          <Button isGray onClick={() => history.push("/home-care")}>
            Home
          </Button>
          <div className="infoCaregiver">
            <h2>Cuidador</h2>
            <div>
              <p>{user.name}</p>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="perfil"
              />
            </div>
          </div>
          <p>Donos interessados</p>
          <ul className="infoOwners">
            {showRequests ? (
              requests.map((el, index) => (
                <li key={el.name + index}>
                  <div>
                    <p>Nome do dono:</p>
                    <p>{el.name}</p>
                  </div>
                  <div>
                    <p>Número de pets:</p>
                    <p>{el.pet.length}</p>
                  </div>

                  <div>
                    <p>Data inicial:</p>
                    <p>{el.final_date || "Sem informação"}</p>
                  </div>
                  <div>
                    <p>Data final:</p>
                    <p>{el.initial_date || "Sem informação"}</p>
                  </div>
                  <div>
                    <p>telephone de contato:</p>
                    <p>{el.telephone || "Sem informação"}</p>
                  </div>
                  <ul className="infoPets">
                    {el.pet?.map((el, index) => (
                      <li key={index}>
                        <h3>Pet: {el.name || "Sem informação"}</h3>
                        <div>
                          <p>Nome:</p>
                          <p>{el.name || "Sem informação"}</p>
                        </div>
                        <div>
                          <p>Tipo de animal:</p>
                          <p>{el.type || "Sem informação"}</p>
                        </div>
                        <div>
                          <p>Idade:</p>
                          <p>{el.age || "Sem informação"}</p>
                        </div>
                        <div>
                          <p>Porte físico:</p>
                          <p>{el.physical_shape || "Sem informação"}</p>
                        </div>
                        <div>
                          <p>Raça:</p>
                          <p>{el.breed || "Sem informação"}</p>
                        </div>
                        <div className="obsPet">
                          <p>Observações e cuidados:</p>
                          <p>{el.note || "Sem informação"}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="buttons">
                    <Button onClick={() => acceptRequest(el)}>Aceitar</Button>
                    <Button onClick={() => deleteRequest(el.id)}>
                      Recusar
                    </Button>
                  </div>
                </li>
              ))
            ) : (
              <p>Você ainda não possui requisições!</p>
            )}
          </ul>
        </div>
      </ContainerDashboardCareGiver>
    </>
  );
}

export default DashboardCareGiver;
