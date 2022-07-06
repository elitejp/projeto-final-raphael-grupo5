import { StyledDiv,StyledText,StyledLabel,StyledForm,StyledInput, StyledButton } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function RegisterCareGiver() {
const baseURL = "https://caregiver-and-pets.herokuapp.com"
    const history= useHistory()
    function dados(dados){
        console.log(dados)

        const data={
            email:dados.email,
            name:dados.nome,
            password:dados.senha,
            telefone: dados.telefone,
            endereco: dados.endereco,
            tipo_moradia: dados.tipo_moradia,
            alimento: dados.alimento,
            treinamento: dados.treinamento
        }
        
        axios.post(baseURL+"/register",data)
        .then((res)=>{
            
            if(res.status===201){
               toast.sucess("Conta criada com sucesso")
               history.push("/dashboard-care")

            }
            
            
            
        }).catch((res)=>{console.log(res)
            toast.error(res.response.data)
        })

    }

     const formSchema=yup.object().shape({
        nome: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email necessário").email("email inválido"),
        senha:yup.string().required("Senha Obrigatória").matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'A senha deve conter pelo menos um simbulo e um numero e uma letra em maiusculo e outra em minusculo, támbem deve conter 8 ou mais caracteres'),
        telefone:yup.string().required("Telefone obrigatório").matches(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/,"Telefone inválido"),
        endereco:yup.string().required("Endereço obrigatório"),
        cpf:yup.string().required("Cpf necessário").matches(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/,"cpf inválido"),
        tipo_moradia:yup.string().required("Tipo de moradia necessário"),
        alimento:yup.boolean(),
        preco:yup.string().required(),
        treinamento:yup.boolean()
    })

    const {register, handleSubmit}= useForm({resolver:yupResolver(formSchema)})

    return(
        
        <StyledDiv  h="auto"  display="flex" w="100%" bc="#68D1E7" >
            <StyledDiv  mw="800px" display="flex" fd="column" margin="20px auto" w="80%" bc="#1D1D1D" h="90%" br="10px" >
            <StyledDiv  display="flex" fd="column" margin="20px auto"    br="10px">

              
                <StyledDiv margin="20px auto 0" display="flex"><StyledText fontsize="18px" color="white">I</StyledText><StyledText fontsize="18px" color="#FA6900" >Pet</StyledText></StyledDiv>
                <StyledText margin="0 auto" color="white" fontsize="18px">Crie sua conta, rápido e grátis</StyledText>
                <StyledDiv margin="10px auto 0" display="flex"><StyledText fontsize="16px" color="white">Seção do</StyledText><StyledText margin="0 0 0 5px" fontsize="16px" color="#FA6900" >cuidador</StyledText></StyledDiv>
                 
                 
                 
              </StyledDiv>
              <StyledForm onSubmit={handleSubmit(dados)} display="flex" fd="column" w="80%" margin="20px auto" dfd="column">

                    <StyledLabel>Nome</StyledLabel>
                    <StyledInput placeholder="Digite seu nome" h="40px"  {...register("nome")}></StyledInput>

                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type="text" placeholder="Digite seu Email" h="40px" {...register("email")} ></StyledInput>
                      
                    <StyledLabel>Senha</StyledLabel>
                    <StyledInput type="password" placeholder="Digite sua senha" h="40px" {...register("senha")} ></StyledInput>

                    <StyledLabel>Telefone para contato</StyledLabel>
                    <StyledInput type="number" placeholder="Digite seu Telefone" h="40px" {...register("telefone")}></StyledInput>

                    <StyledLabel>Endereço</StyledLabel>
                    <StyledInput placeholder="Digite seu Endereço" h="40px" {...register("endereco")} ></StyledInput>

                     
                    <StyledLabel>CPF</StyledLabel>
                    <StyledInput placeholder="Digite seu CPF" h="40px" {...register("cpf")}></StyledInput>
                    
                    <StyledLabel>Tipo de moradia</StyledLabel>
                    <StyledInput placeholder="Especifique o tipo" h="40px" {...register("tipo_moradia")}></StyledInput>
                     
                    <StyledLabel>Preço Dia/hora</StyledLabel>
                    <StyledInput placeholder="Digite o preço por dia e hora" h="40px" {...register("preco")}></StyledInput>
                    
                     

                    <StyledLabel>Provê alimento do Pet?  <StyledInput type="checkbox" width="20px" {...register("alimento")}></StyledInput> </StyledLabel>
                    <StyledLabel>Possui algum tipo de treinamento ou curso na área?  <StyledInput type="checkbox" width="20px" {...register("treinamento")}></StyledInput> </StyledLabel>
                    
                    

                     <StyledButton type="submit" w="50%"backg="#F28631">Cadastre-se</StyledButton>
                 </StyledForm>
                              
                      <StyledText margin="0 auto 20px " color="gray" >Já possui conta? faça o login <Link to={"/login"}>aqui</Link></StyledText>
                      
                      
                      
                      
            </StyledDiv>
        </StyledDiv>
        
        

    )
}

export default RegisterCareGiver;
