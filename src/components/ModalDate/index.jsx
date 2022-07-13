import { StyledDiv, StyledForm, StyledLabel } from "../../pages/DashboardOwner/styles";
import Button from "../Button";
import Input from "../Input";
import CreateModal from "../Modals";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getOwnerAndPets } from "../../services/apiOwner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { apiCare, apiOwner } from "../../services";
import { useEffect } from "react";

function ModalDate ({setMdate, dadosDate}){
    const dados = JSON.parse(localStorage.getItem('User'))
    const token = localStorage.getItem('Token')
    const [user, setUser] = useState(null)

    useEffect(() => {
      getOwnerAndPets(dados.id, token).then((res) =>{
        setUser(res)       
      });
    }, [])
   
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

    function submit({start, end}){      
      

      const initial_date = `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}` 
      const final_date = `${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}` 
              
      const data = {
        email: user.email,
        name: user.name,
        telephone: user.telephone,
        age: user.age,
        initial_date: initial_date,
        final_date: final_date,
        userId: dadosDate.id,
        pet: user.pet
      }

      apiCare.post('/request', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
				console.log(response);
				toast.success("Pedido com sucesso!");		
        setMdate(false)
			})
    }

    return(
    <CreateModal>
        <StyledDiv fd="column">
            <StyledForm onSubmit={handleSubmit(submit)}>
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
