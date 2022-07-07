import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: left;
`;

export const StyledInput = styled.div`
  background-color: ${(props) =>
    props.isGray ? "var(--grey200)" : "var(--grey300)"};
  border-radius: 3px;
  border: 2px solid
    ${(props) =>
      props.isError
        ? "var(--negative)"
        : props.isGray
        ? "var(--grey200)"
        : "var(--grey300)"};
  color: var(--grey100);
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  display: flex;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey0);

    &::placeholder {
      color: var(--grey100);
    }
  }

  span {
    color: var(--negative);
  }
`;
