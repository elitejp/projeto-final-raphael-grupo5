import styled from "styled-components";

export const StyledCardPet = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  background-color: var(--primary200);
  border-radius: 8px;
  padding: 10px;

  div {
    background-color: var(--grey300);
    padding: 5px;

    h3,
    p {
      font-size: 14px;
    }
  }

  .data-box {
    display: flex;
    justify-content: space-between;
  }
`;
