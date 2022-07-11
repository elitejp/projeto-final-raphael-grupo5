import { useEffect, useState } from "react";
import CreateModal from "../../components/Modals";
import Input from "../../components/Input";
import { StyledDiv,StyledText,StyledLabel,StyledForm,StyledInput } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button";
import Header from "../../components/Header";
import { apiOwner } from "../../services";


function DashboardOwner() {

    const [MCpet , setMCpet] = useState(false)

    const formSchema=yup.object().shape({
      nome:yup.string().required("Escreva o nome do animal"),
      tipo:yup.string().required("Escreva o tipo de animal"),
      idade:yup.string().required("Diga a idade do animal"),
      porte:yup.string().required("Especifique o porte do animal"),
      raca:yup.string().required("Especifique a raça do animal"),
      obs_cuidado:yup.string()

      
  })
  const User = JSON.parse(localStorage.getItem("User"))
  const Token =localStorage.getItem("Token")
  const [Pets, setPets]= useState([])
  useEffect(()=>{
    apiOwner.get(`/pet?userId=${User.id}`,{
      data:{
  
      },headers:{
        "Authorization": `Bearer ${Token}`
      }
    }).then((res)=>setPets(res.data))
    console.log(Pets)
  
  },[])
  function dados(dados){
    toast.success(`${dados.nome} foi cadastrado com sucesso` )
    apiOwner.post(`/pet`,{
      type: dados.tipo,
      namePet: dados.nome,
      userId:User.id,
      obs_care: dados.obs_cuidado,
      breed:dados.raca,
      size:dados.porte,
      age: dados.idade
    },{
      headers:{
        "Authorization": `Bearer ${Token}`
      }
    })
    setMCpet(false)
  }

  const {register, handleSubmit, formState:{errors}}= useForm({resolver:yupResolver(formSchema)})
  
  

    return(
        <>
        <Header></Header>
        <StyledDiv  fd="column"br="0" bc="#F1F1F1">
         <StyledDiv bc="none" p="none" >
          <StyledText >Dono dos pets:</StyledText>
          <StyledText fw="bold">{User.name}</StyledText>
         </StyledDiv>
         <StyledDiv bc="none" p="none">
          <Button onClick={()=>setMCpet(true)} w="auto" m="20px 0 0 auto" h="35px" p="0 5px">Adicionar pet </Button>
         </StyledDiv>

         <StyledDiv p="0"  bc="none">
          <StyledLabel m="0" color="black">Pets cadastrados</StyledLabel>

         </StyledDiv>
         <StyledDiv bc="none" fd="column" b="3px solid #FA6900">
            {Pets.length>0?Pets.map((elem,index)=>(
              <StyledDiv fd="column" key={index} bc="#C2ECF5" p="0 10px 20px">
              
              <StyledText   fw="bold"> Pet: {elem.namePet}</StyledText>
                 
              <StyledDiv p="none" br="0">
                <StyledText>Nome: </StyledText> <StyledText m="0 10px">{elem.namePet}</StyledText>
              </StyledDiv>
              <StyledDiv p="none" br="0">
                <StyledText>Tipo de animal: </StyledText> <StyledText m="0 10px">{elem.type}</StyledText>
              </StyledDiv>
              <StyledDiv p="none" br="0">
                <StyledText>Idade: </StyledText> <StyledText m="0 10px">{elem.age} Ano/s</StyledText>
              </StyledDiv>
              <StyledDiv p="none" br="0">
                <StyledText>Porte físico: </StyledText> <StyledText m="0 10px">{elem.size}</StyledText>
              </StyledDiv>
              <StyledDiv p="none" br="0">
                <StyledText>Raça: </StyledText> <StyledText m="0 10px">{elem.namePet}</StyledText>
              </StyledDiv>

              
              </StyledDiv>
              
                  
            )):""}


         </StyledDiv>
          


        </StyledDiv>


        {MCpet===true?<CreateModal>
          <StyledDiv margin="none"  fd="column">

            <StyledForm onSubmit={handleSubmit(dados)}>
            <StyledDiv fd="column">
           
            <Input label="Nome:" register={register} name="nome"/>
            <StyledLabel color="pink" m="0">{errors.nome?.message}</StyledLabel>

            <Input label="Tipo de animal:" register={register} name="tipo"/>
            <StyledLabel color="pink" m="0">{errors.tipo?.message}</StyledLabel>

            <Input label="Idade:" type="number" register={register} name="idade"/>
            <StyledLabel color="pink" m="0">{errors.idade?.message}</StyledLabel>

            <Input label="Porte fisico:" register={register} name="porte"/>
            <StyledLabel color="pink" m="0">{errors.porte?.message}</StyledLabel>

            <Input label="Raça:" register={register} name="raca"/>
            <StyledLabel color="pink" m="0">{errors.raca?.message}</StyledLabel>

            <Input label="Observações e cuidados" register={register} name="obs_cuidado"/>
            </StyledDiv>
            <StyledDiv>
              <Button type="submit" w="40%">Concluir</Button> <Button onClick={(e)=>{setMCpet(false)}} w="40%" isGray>Cancelar</Button>
            </StyledDiv>
            </StyledForm>

          
          </StyledDiv>
          
            
          </CreateModal>:""}
        
        </>
        
    )
}

export default DashboardOwner;
