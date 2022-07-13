import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.isGray ? "#C0C0C0" : props.notPrimary ? "#A4E3F0" : "#FA6900"};
  color: #000000;
  height: 45px;
  width: ${(props)=>props.w||"100%"};
  border-radius: 8px;
  border: 2px solid var(--Black);
  font-family: "Roboto mono", monospace;
  margin-top: 16px;
  transition: 0.5s;
  cursor: pointer;
  font-weight: 600;
  margin:${(props)=>props.m||"0 auto"};

  :hover {
    border: 2px solid #000000;
    background: ${(props) =>
    props.isGray ? "#F1F1F1" : props.notPrimary ? "#C2ECF5" : "#F28631"};
  }

  :active {
    transition: 0.3s;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 1);
  }
`;
