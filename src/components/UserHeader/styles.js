import styled from "styled-components";

export const StyledUserHeader = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;

  div {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 14px;
  }

  @media screen and (min-width: 900px) {
    div {
      margin: 35px 0;
    }
    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;
