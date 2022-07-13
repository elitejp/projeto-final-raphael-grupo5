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
  .divbtn{
    display: flex;
    background-color: #C2ECF5;
    justify-content: space-evenly;
  }
  button:hover{
    cursor:pointer;
  }
  button{
    background-color: #1EA7C2;
    border:none;
    padding: 5px 20px;
    border-radius: 5px;

  }

  
`;

export const StyledDiv = styled.div`

display: ${(props)=>props.display||"flex"};
background-color:${(props)=>props.bc||"#FFFFFF"};
width:${(props)=>props.w||"100%"};
height:${(props)=>props.h||"auto"};
margin:${(props)=>props.margin||"0 auto"};
border-radius:${(props)=>props.br||"10px"};
padding:${(props)=>props.p||"20px"};
flex-direction:${(props)=>props.fd};
max-width:${(props)=>props.mw};
gap:10px;
justify-content: space-evenly;
`;