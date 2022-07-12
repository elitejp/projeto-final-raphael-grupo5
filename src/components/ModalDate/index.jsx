import { StyledDiv, StyledForm, StyledLabel } from "../../pages/DashboardOwner/styles";
import Button from "../Button";
import Input from "../Input";
import CreateModal from "../Modals";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ModalDate ({setMdate,dadosDate}){

   
    const formSchema = yup.object().shape({
      
      start:yup.date("Especifique uma data").required("Especifique a data inicial"),
      end: yup.date().required("Selecione uma data").when('start', (start) => {
        if (start) {
            return yup.date().min(start, 'A data final deve vir depois da data inicial')
        }
    }),
      });
   

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(formSchema), });
    

    return(
    <CreateModal>
        

        <StyledDiv fd="column">
            <StyledForm onSubmit={handleSubmit(dadosDate)}>
              <StyledDiv fd="column">
                <Input  type="date" label="De:" register={register}  name="start" />
                <StyledLabel color="pink" m="0">
                  {errors.start?.message}
                </StyledLabel>

                <Input  type="date" label="Até:" register={register}  name="end" />
                <StyledLabel color="pink" m="0">
                  {errors.end?.message}
                </StyledLabel>


                
              </StyledDiv>
              <StyledDiv>
                <Button type="submit" w="40%">
                  Reservar
                  
                </Button>
                <Button
                  onClick={(e) => {
                    setMdate(false);
                    
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
    )

}
export default ModalDate
