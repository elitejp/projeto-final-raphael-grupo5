import { useState, useEffect } from "react";
import CreateModal from "../../components/Modals";
import Input from "../../components/Input";
import { StyledDiv, StyledLabel, StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import { getOwnerAndPets } from "../../services/apiOwner";

import Header from "../../components/Header";
import UserHeader from "../../components/UserHeader";
import ListPets from "../../components/ListPets";
import { apiOwner } from "../../services";

function DashboardOwner() {
  
  const [modalCreatePet, setmodalCreatePet] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [ownerAndPets, setOwnerAndPets] = useState({});
  const [modalEditPet,setmodalEditPet] = useState(false)
  const [Temp, setTemp] = useState({})
  
  useEffect(() => {
    
    const ownerToken = localStorage.getItem("Token");

    if (ownerToken) {
      const ownerId = JSON.parse(localStorage.getItem("User"))

      getOwnerAndPets(ownerId.id, ownerToken).then((res) => setOwnerAndPets(res));

      return setAuthenticated(true);
    }
  }, [authenticated]);

 

  const formSchema = yup.object().shape({
    nome: yup.string().required("Escreva o nome do animal"),
    tipo: yup.string().required("Escreva o tipo de animal"),
    idade: yup.string().required("Diga a idade do animal"),
    porte: yup.string().required("Especifique o porte do animal"),
    raca: yup.string().required("Especifique a raça do animal"),
    obs_cuidado: yup.string(),
  });

  function dados(dados) {
    toast.success(`${dados.nome} foi cadastrado com sucesso`);
    const ownerToken = localStorage.getItem("Token");
    const ownerId = JSON.parse(localStorage.getItem("User"))
    console.log(dados)
    getOwnerAndPets(ownerId.id, ownerToken).then((res) => setOwnerAndPets(res));

    apiOwner.post("/pet",{
      type: dados.tipo,
      age: dados.idade,
      size: dados.porte,
      name: dados.nome,
      breed: dados.raca,
      obs_care:dados.obs_cuidado,
      userId:ownerId.id
      

    }, { headers:{
      "Authorization": `Bearer ${ownerToken}`}

    })
    setmodalCreatePet(false);
  }
  function dadosEditar(dados){
    

  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function modalEditar(dados){
    setTemp(dados)
    setmodalEditPet(true)
    
    

  }
  function modalDeletar(dados){

  }

  return (
    <>
    {console.log(ownerAndPets)}
      <Header />
      {modalEditPet?<CreateModal>
        {console.log(Temp)}

        <StyledDiv fd="column">
            <StyledForm onSubmit={handleSubmit(dadosEditar)}>
              <StyledDiv fd="column">
                <Input label="Nome:" register={register} defaultValue={Temp.name} name="nome" />
                <StyledLabel color="pink" m="0">
                  {errors.nome?.message}
                </StyledLabel>

                <Input
                  label="Tipo de animal:"
                  register={register}
                  name="tipo"
                  defaultValue={Temp.type}
                />
                <StyledLabel color="pink" m="0">
                  {errors.tipo?.message}
                </StyledLabel>

                <Input
                  label="Idade:"
                  type="number"
                  register={register}
                  name="idade"
                  defaultValue={Temp.age}
                />
                <StyledLabel color="pink" m="0">
                  {errors.idade?.message}
                </StyledLabel>

                <Input label="Porte fisico:" register={register} defaultValue={Temp.size} name="porte" />
                <StyledLabel color="pink" m="0">
                  {errors.porte?.message}
                  
                </StyledLabel>

                <Input label="Raça:" register={register} name="raca" defaultValue={Temp.breed} />
                <StyledLabel color="pink" m="0">
                  {errors.raca?.message}
                </StyledLabel>

                <Input
                  label="Observações e cuidados"
                  register={register}
                  name="obs_cuidado"
                  defaultValue={Temp.obs_care}
                />
              </StyledDiv>
              <StyledDiv>
                <Button type="submit" w="40%">
                  Concluir
                </Button>
                <Button
                  onClick={(e) => {
                    setmodalEditPet(false);
                    setTemp({})
                  }}
                  w="40%"
                  isGray
                >
                  Cancelar
                </Button>
              </StyledDiv>
            </StyledForm>
          </StyledDiv>

      </CreateModal>:""}



      {modalCreatePet ? (
        <CreateModal>
          <StyledDiv fd="column">
            <StyledForm onSubmit={handleSubmit(dados)}>
              <StyledDiv fd="column">
                <Input label="Nome:" register={register} name="nome" />
                <StyledLabel color="pink" m="0">
                  {errors.nome?.message}
                </StyledLabel>

                <Input
                  label="Tipo de animal:"
                  register={register}
                  name="tipo"
                />
                <StyledLabel color="pink" m="0">
                  {errors.tipo?.message}
                </StyledLabel>

                <Input
                  label="Idade:"
                  type="number"
                  register={register}
                  name="idade"
                />
                <StyledLabel color="pink" m="0">
                  {errors.idade?.message}
                </StyledLabel>

                <Input label="Porte fisico:" register={register} name="porte" />
                <StyledLabel color="pink" m="0">
                  {errors.porte?.message}
                </StyledLabel>

                <Input label="Raça:" register={register} name="raca" />
                <StyledLabel color="pink" m="0">
                  {errors.raca?.message}
                </StyledLabel>

                <Input
                  label="Observações e cuidados"
                  register={register}
                  name="obs_cuidado"
                />
              </StyledDiv>
              <StyledDiv>
                <Button type="submit" w="40%">
                  Concluir
                </Button>{" "}
                <Button
                  onClick={(e) => {
                    setmodalCreatePet(false);
                  }}
                  w="40%"
                  isGray
                >
                  Cancelar
                </Button>
              </StyledDiv>
            </StyledForm>
          </StyledDiv>
        </CreateModal>
      ) : (
        ""
      )}


      <UserHeader
        name={ownerAndPets?.name}
        userType="owner"
        setmodalCreatePet={setmodalCreatePet}
      />

      <ListPets modalEditar={modalEditar} modalDeletar={modalDeletar} pets={ownerAndPets?.pet} />
    </>
  );
}

export default DashboardOwner;
