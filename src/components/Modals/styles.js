import styled from "styled-components";

export const StyledCreateModal = styled.div`
 
  position: absolute ;
  box-sizing: border-box;
  top:0;
  left: 0;
  width: 100vw;
  height: unset;
  min-height: 100vh ;
  background-color: rgb(0, 0, 0, 0.5);
  overflow-y: scroll;
  padding: 15px 0px;
  display:flex;
  align-items: center;
  justify-content: center;
  
  .content-box {
    width: 90% ;
    max-width: 400px;
    margin: 15px auto;
  }
`;
