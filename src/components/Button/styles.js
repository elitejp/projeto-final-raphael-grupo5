import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.isGray ? "#C0C0C0" : props.notPrimary ? "#A4E3F0" : "#FA6900"};
  color: #000000;
  height: 45px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--Black);
  font-family: "Roboto mono", monospace;
  margin-top: 16px;
  transition: 0.5s;
  cursor: pointer;
  font-weight: 600;

  :hover {
    border: 2px solid #000000;
  }

  :active {
    transition: 0.3s;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 1);
  }
`;
