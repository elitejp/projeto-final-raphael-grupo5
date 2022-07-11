import styled from "styled-components";

export const StyledListPets = styled.ul`
  margin: 20px 0;
`;

export const StyledDataBox = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 10px auto;
  background-color: var(--grey300);
  padding: 15px;
  border-radius: 10px;

  .pets-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
