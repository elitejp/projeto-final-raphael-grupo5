import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import React from "react";
import {
  Title,
  StyledDiv,
  Container,
  Section,
  Div,
  Text,
  QuestionsContainer,
} from "./styles.js";

function LandingPage() {
  const history = useHistory();

  return (
    <Container>
      <StyledDiv margintop="35px" jc="center" display="flex">
        <Title>Bem vindo ao i</Title>
        <Title color="#FA6900">Pet</Title>
      </StyledDiv>

      <Section>
        <StyledDiv>
          <Div>
            <Text fontfamily="inter" fontsize="17px">
              Quer se cadastrar como cuidador?
            </Text>
            <Button
              onClick={() => {
                history.push("/register-care");
              }}
              m="23px"
              w="95px"
            >
              Cadastro
            </Button>

            <Text fontfamily="inter" fontsize="17px" margintop="10px">
              Caso já esteja cadastrado, faça o login
            </Text>
            <Button
              onClick={() => {
                history.push("/login-care");
              }}
              m="23px"
              w="95px"
            >
              Login
            </Button>
          </Div>
        </StyledDiv>

        <StyledDiv>
          <Div>
            <Text fontfamily="inter" fontsize="17px">
              Quer se cadastrar como dono de pet?
            </Text>
            <Button
              onClick={() => {
                history.push("/register-owner");
              }}
              m="23px"
              w="95px"
            >
              Cadastro
            </Button>

            <Text fontfamily="inter" fontsize="17px" margintop="13px">
              Caso já esteja cadastrado, faça o login
            </Text>
            <Button
              onClick={() => {
                history.push("/login-dono");
              }}
              m="23px"
              w="95px"
            >
              Login
            </Button>
          </Div>
        </StyledDiv>
      </Section>

      <QuestionsContainer
        marginright="47px"
        display="flex"
        fd="column"
        w="1000px"
        h="800px"
        margintop="25px"
      >
        <Text
          marginbot="13px"
          display="flex"
          jc="center"
          ai="center"
          fontsize="24px"
          fontfamily="inter"
        >
          Dúvidas frequentes
        </Text>

        <QuestionsContainer
          marginleft="50px"
          fd="column"
          display="flex"
          bc="var(--primary200)"
          br="4px"
          h="125px"
          w="360px"
        >
          <Text margintop="12px" fontsize="17px">
            Como funciona o site?
          </Text>
          <Text
            marginleft="10px"
            margintop="10px"
            fontfamily="inter"
            fontsize="16px"
          >
            O site funciona como um hotel para pets. Conectamos quem tem pets a
            pessoas que cuidam deles no dia e hora que você precisar!
          </Text>
        </QuestionsContainer>

        <QuestionsContainer
          marginleft="50px"
          margintop="10px"
          fd="column"
          display="flex"
          bc="var(--primary200)"
          br="4px"
          h="150px"
          w="360px"
        >
          <Text margintop="12px" fontsize="17px">
            Como utilizar o serviço do site
          </Text>
          <Text
            marginleft="10px"
            margintop="10px"
            fontfamily="inter"
            fontsize="16px"
          >
            O dono do pet precisa realizar o cadastro próprio e de seus pets,
            podendo realizar a busca de cuidadores interessados. Por conta do
            cuidador, basta se registrar como responsável temporário e esperar a
            solicitação do serviço por parte do dono.{" "}
          </Text>
        </QuestionsContainer>

        <QuestionsContainer
          marginleft="50px"
          fd="column"
          margintop="10px"
          display="flex"
          bc="var(--primary200)"
          br="4px"
          h="110px"
          w="360px"
        >
          <Text marginleft="10px" margintop="12px" fontsize="17px">
            Conte para a gente
          </Text>
          <Text
            marginleft="20px"
            margintop="10px"
            fontfamily="inter"
            fontsize="16px"
          >
            Avaliar a sua experiência é importante para mantermos sempre um
            serviço de qualidade
          </Text>
        </QuestionsContainer>
      </QuestionsContainer>
    </Container>
  );
}

export default LandingPage;
