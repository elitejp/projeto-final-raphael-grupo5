import { useState } from "react";
import CreateModal from "../../components/Modals";
import Input from "../../components/Input";
import { StyledDiv,StyledText,StyledLabel,StyledForm,StyledInput } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button";


function DashboardOwner() {

    const [MCpet , setMCpet] = useState(true)

    const formSchema=yup.object().shape({
      nome:yup.string().required("Escreva o nome do animal"),
      tipo:yup.string().required("Escreva o tipo de animal"),
      idade:yup.string().required("Diga a idade do animal"),
      porte:yup.string().required("Especifique o porte do animal"),
      raca:yup.string().required("Especifique a raça do animal"),
      obs_cuidado:yup.string()

      
  })

  function dados(dados){
    toast.success(`${dados.nome} foi cadastrado com sucesso` )

    console.log(dados)
    setMCpet(false)
  }

  const {register, handleSubmit, formState:{errors}}= useForm({resolver:yupResolver(formSchema)})



    return(
        <>
        

        {MCpet===true?<CreateModal>
          <StyledDiv fd="column">

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
