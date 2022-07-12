import {
  StyledDiv,
  StyledText,
  StyledLabel,
  StyledForm,
  
} from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { apiCare } from "../../services";
import { useState } from "react";
import Loading from "../../components/Loading";

function LoginCuidador() {
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  function dados(dados) {
    const data = {
      email: dados.email,
      password: dados.password,
    };

    setLoading(true)
    
    apiCare.post("/login", data).then((res) => {
      
      localStorage.setItem("Token", res.data.accessToken);
      localStorage.setItem("User", JSON.stringify(res.data.user));
      if(res.status===200){
        toast.success("Sucesso")
        history.push("/dashboard-care")
      }
    
      
    })
    .catch((err)=>{
        console.log(err)
            toast.error(err.response?.data)

        
    }).finally(() => {
      setLoading(false)
    })

  }

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email necessário"),
    password: yup.string().required("Senha necessária"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <StyledDiv h="100vh" display="flex" w="100%" bc="#68D1E7">
      <StyledDiv
        mw="800px"
        display="flex"
        fd="column"
        margin="auto auto"
        w="80%"
        bc="#1D1D1D"
        h="90%"
        br="10px"
      >
        <StyledDiv display="flex" fd="column" margin="auto auto 0" br="10px">
          <StyledDiv margin="20px auto 0" display="flex">
            <StyledText fontsize="18px" color="white">
              I
            </StyledText>
            <StyledText fontsize="18px" color="#FA6900">
              Pet
            </StyledText>
          </StyledDiv>
          <StyledText margin="0 auto" color="white" fontsize="18px">
            Bem-vindo de volta!
          </StyledText>
          <StyledDiv margin="10px auto 0" display="flex">
            <StyledText fontsize="16px" color="white">
              Seção do
            </StyledText>
            <StyledText margin="0 0 0 5px" fontsize="16px" color="#FA6900">
              cuidador
            </StyledText>
          </StyledDiv>
        </StyledDiv>

        <StyledForm
          onSubmit={handleSubmit(dados)}
          display="flex"
          fd="column"
          w="80%"
          margin="20px auto"
          dfd="column"
        >
          <StyledLabel>Email</StyledLabel>
          <Input
            placeholder="Digite seu Email"
            register={register}
            name="email"
          />
          <StyledLabel color="pink" m="0">
            {errors.email?.message}
          </StyledLabel>

          <StyledLabel>Senha</StyledLabel>
          <Input
            type="password"
            placeholder="Digite sua Senha"
            register={register}
            name="password"
          />
          <StyledLabel color="pink" m="0">
            {errors.password?.message}
          </StyledLabel>

          {loading && <p className="span-loading">CARREGANDO...</p>}
          <Button m="30px auto" w="50%" type="submit">
            Fazer login
          </Button>          
        </StyledForm>

        <StyledText margin="0 auto auto  " color="gray">
          Não possui conta? <Link to={"/register-care"}>Clique aqui</Link>
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
}
export default LoginCuidador;
