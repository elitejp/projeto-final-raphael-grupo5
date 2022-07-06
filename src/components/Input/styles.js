import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: left;
`;

export const StyledInput = styled.div`
  background-color: var(--grey300);
  border-radius: 3px;
  border: 2px solid var(--grey100);
  color: var(--grey0);
  padding: 1rem;
  width: 100%;
  display: flex;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey0);

    &::placeholder {
      color: var(--grey0);
    }
  }
`;
