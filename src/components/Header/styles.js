import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10%;
  background-color: var(--grey100);


  div {
    display: flex;
    gap: 0.5rem;

    button {
      background: none;
      border: none;

      color: var(--grey300);

      cursor: pointer;
    }
  }
`;
