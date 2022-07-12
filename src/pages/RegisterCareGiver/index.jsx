import { StyledDiv,StyledText,StyledLabel,StyledForm,StyledInput } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

function RegisterCareGiver() {
const baseURL = "https://caregiver-and-pets.herokuapp.com";
    const history= useHistory()
    const [loading, setLoading] = useState(false)
    function dados(dados){
        
        setLoading(true)
        const data={
            email:dados.email,
            name:dados.name,
            password:dados.senha,
            telefone: dados.telefone,
            address: dados.address,
            type_house: dados.type_house,
            food: dados.food,
            istraining: dados.istraining,
            price: dados.price,
            detail: dados.detail
        }
        
        axios.post(baseURL+"/register",data)
        .then((res)=>{
            
            if(res.status===201){
               toast.success("Conta criada com sucesso")
               history.push("/login-care")

            }
            
        }).catch((res)=>{console.log(res)
            toast.error(res.response?.data)
        }).finally(() => {
            setLoading(false)
        })

    }

     const formSchema=yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email necessário").email("email inválido"),
        senha:yup.string().required("Senha Obrigatória").matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'A senha deve conter pelo menos um simbulo e um numero e uma letra em maiusculo e outra em minusculo, támbem deve conter 8 ou mais caracteres'),
        telefone:yup.string().required("Telefone obrigatório").matches(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/,"Telefone inválido"),
        address:yup.string().required("Endereço obrigatório"),
        cpf:yup.string().required("Cpf necessário").matches(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/,"cpf inválido"),
        type_house:yup.string().required("Tipo de moradia necessário"),
        food:yup.boolean(),
        price:yup.string().required("Especifique um valor"),
        detail:yup.string().required("Falo um pouco sobre você"),
        istraining:yup.boolean()
    })

    const {register, handleSubmit, formState:{errors}}= useForm({resolver:yupResolver(formSchema)})

    return(
        
        <StyledDiv  h="auto"  display="flex" w="100%" bc="#68D1E7" >
            <StyledDiv  mw="800px" display="flex" fd="column" margin="20px auto" w="80%" bc="#1D1D1D" h="90%" br="10px" >
            <StyledDiv  display="flex" fd="column" margin="20px auto"    br="10px">

              
                <StyledDiv margin="20px auto 0" display="flex"><StyledText fontsize="18px" color="white">I</StyledText><StyledText fontsize="18px" color="#FA6900" >Pet</StyledText></StyledDiv>
                <StyledText margin="0 auto" color="white" fontsize="18px">Crie sua conta, rápido e grátis</StyledText>
                <StyledDiv margin="10px auto 0" display="flex"><StyledText fontsize="16px" color="white">Seção do</StyledText><StyledText margin="0 0 0 5px" fontsize="16px" color="#FA6900" >cuidador</StyledText></StyledDiv>
                 
                 
                 
              </StyledDiv>
              <StyledForm  onSubmit={handleSubmit(dados)} display="flex" fd="column" w="80%" margin="20px auto" dfd="column">

                    <StyledLabel>name</StyledLabel>
                    <Input placeholder="Digite seu name" register = {register} name="name"/>
                    <StyledLabel color="pink" m="0">{errors.name?.message}</StyledLabel>
            
                    <StyledLabel>Email</StyledLabel>
                    <Input type="text" placeholder="Digite seu Email" h="40px"register = {register} name="email"/>
                    <StyledLabel color="pink" m="0">{errors.email?.message}</StyledLabel>
                    
                    <StyledLabel>Senha</StyledLabel>
                    <Input type="password" placeholder="Digite sua senha" h="40px" register = {register} name="senha" />
                    <StyledLabel color="pink" m="0">{errors.senha?.message}</StyledLabel>


                    <StyledLabel>Telefone para contato</StyledLabel>
                    <Input type="number" placeholder="Digite seu Telefone" h="40px" register = {register} name="telefone" />
                    <StyledLabel color="pink" m="0">{errors.telefone?.message}</StyledLabel>

                    <StyledLabel>Endereço</StyledLabel>
                    <Input placeholder="Digite seu Endereço" h="40px" name="address" register = {register} />
                    <StyledLabel color="pink" m="0">{errors.address?.message}</StyledLabel>
                     
                    <StyledLabel>CPF</StyledLabel>
                    <Input placeholder="Digite seu CPF" h="40px" name="cpf"  register = {register}/>
                    <StyledLabel color="pink" m="0">{errors.cpf?.message}</StyledLabel>


                    <StyledLabel>Tipo de moradia</StyledLabel>
                    <Input placeholder="Especifique o tipo" h="40px" register = {register} name="type_house"/>
                    <StyledLabel color="pink" m="0">{errors.type_house?.message}</StyledLabel>

                    <StyledLabel>Preço Dia/hora</StyledLabel>
                    <Input placeholder="Digite o preço por dia e hora" h="40px" register = {register} name="price"/>
                    <StyledLabel color="pink" m="0">{errors.price?.message}</StyledLabel>
                    
                    <StyledLabel>Detalhes sobre você</StyledLabel>
                    <Input placeholder="Conte um pouco sobre você" h="40px" register = {register} name="detail"/>
                    <StyledLabel color="pink" m="0">{errors.detail?.message}</StyledLabel>
                     

                    <StyledLabel>Provê food do Pet?  <StyledInput type="checkbox" width="20px" {...register("food")} ></StyledInput> </StyledLabel>
                    <StyledLabel>Possui algum tipo de istraining ou curso na área?  <StyledInput type="checkbox" width="20px" {...register("istraining")}></StyledInput> </StyledLabel>
                    
                    
                    {loading && <p className="span-loading">CARREGANDO...</p>}
                     <Button w="50%" type ="submit">Cadastre-se</Button>

                     
                 </StyledForm>
                              
                      <StyledText margin="0 auto 20px " color="gray" >Já possui conta? faça o login <Link to={"/login-care"}>aqui</Link></StyledText>
                      
                      
                      
                      
            </StyledDiv>
        </StyledDiv>
        
        

    )
}

export default RegisterCareGiver;
