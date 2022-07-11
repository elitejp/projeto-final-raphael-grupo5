import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 1024px;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
  }

  @media (max-width: 767px) {
    background-color: gray;
    width: 558px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 768px) {
    font-family: inter;
    font-size: 32px;
    color: ${(props) => props.color || ""};
  }

  @media (max-width: 767px) {
    font-family: inter;
    font-size: 24px;
    color: ${(props) => props.color || ""};
  }
`;

export const StyledDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: ${(props) => props.display || "flex"};
    margin-top: ${(props) => props.margintop};
    justify-content: ${(props) => props.jc};
  }
  @media (max-width: 767px) {
    display: ${(props) => props.display || "flex"};
    margin-top: ${(props) => props.margintop};
    justify-content: ${(props) => props.jc};
  }
`;

export const Section = styled.section`
  @media screen and (min-width: 767px) {
    display: flex;
    gap: 300px;
  }
  @media (max-width: 767px) {
    display: flex;
    gap: 7px;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    height: 305px;
    width: 290px;
    background-color: #c2ecf5;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    height: 271px;
    width: 130px;
    background-color: #c2ecf5;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.p`
  @media screen and (min-width: 768px) {
    font-family: ${(props) => props.fontfamily || "inter"};
    font-size: ${(props) => props.fontsize};
    color: ${(props) => props.color || ""};
    margin-left: ${(props) => props.marginleft};
    justify-content: ${(props) => props.jc};
    margin-bottom: ${(props) => props.marginbot};
    margin-top: ${(props) => props.margintop};
    display: ${(props) => props.display || "flex"};
  }

  @media (max-width: 767px) {
    font-family: ${(props) => props.fontfamily || "inter"};
    font-size: 16px;
    color: ${(props) => props.color || ""};
    margin-left: 10px;
    margin-bottom: ${(props) => props.marginbot};
    margin-top: 15px;
    display: ${(props) => props.display || "flex"};
  }
`;

export const QuestionsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: ${(props) => props.display || "flex"};
    background-color: ${(props) => props.bc};
    width: ${(props) => props.w};
    height: ${(props) => props.h || "auto"};
    margin-left: ${(props) => props.marginleft};
    margin-right: ${(props) => props.marginright};
    gap: ${(props) => props.gap};
    margin-top: ${(props) => props.margintop || "0 auto"};
    border-radius: ${(props) => props.br};
    padding: ${(props) => props.p};
    padding-top: ${(props) => props.paddingtop};
    flex-direction: ${(props) => props.fd};
    max-width: ${(props) => props.mw};
    justify-content: ${(props) => props.jc};
    align-items: center;
    margin-bottom: ${(props) => props.marginbot};
  }

  @media (max-width: 767px) {
    display: ${(props) => props.display || "flex"};
    background-color: ${(props) => props.bc};
    width: 260px;
    height: 265px;
    gap: ${(props) => props.gap};
    margin-top: ${(props) => props.margintop || "0 auto"};
    border-radius: ${(props) => props.br};
    padding: ${(props) => props.p};
    padding-top: ${(props) => props.paddingtop};
    flex-direction: ${(props) => props.fd};
    max-width: ${(props) => props.mw};
    justify-content: ${(props) => props.jc};
    align-items: center;
    margin-bottom: ${(props) => props.marginbot};
  }
`;
