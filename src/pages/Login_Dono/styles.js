import styled from "styled-components";
export const StyledDiv = styled.div`

display: ${(props)=>props.display||"flex"};
background-color:${(props)=>props.bc};
width:${(props)=>props.w};
height:${(props)=>props.h||"auto"};
margin:${(props)=>props.margin||"0 auto"};
border-radius:${(props)=>props.br};
padding:${(props)=>props.p};
flex-direction:${(props)=>props.fd};
max-width:${(props)=>props.mw};
`;

export const StyledText= styled.p`
color:${(props)=>props.color};
font-size:${(props)=>props.fontsize};
margin:${(props)=>props.margin};

`
export const StyledForm= styled.form`
margin:${(props)=>props.margin};
display:${(props)=>props.display};
width:${(props)=>props.w};
height:${(props)=>props.h||"auto"};
flex-direction:${(props)=>props.fd};
.span-loading{
    color: white;
    margin: 0 auto;
    margin-top: 15px;
 }

`
export const StyledLabel= styled.label`
color:${(props)=>props.color||"white"};
margin:${(props)=>props.m||"20px auto 5px 0"}


`

export const StyledInput = styled.input`
width:${(props)=>props.w};
height:${(props)=>props.h||"auto"};
border-radius:${(props)=>props.br||"10px"};
border:none;
padding:${(props)=>props.p||"10px"};
::placeholder {
    
    font-size:${(props)=>props.pfs};
    color:${(props)=>props.pc} ;
}
`

export const StyledButton = styled.button`

width:${(props)=>props.w};
margin:${(props)=>props.m||"10px auto"};
font-size:${(props)=>props.fontsize||"17px"};
color:${(props)=>props.color};
height:${(props)=>props.h||"50px"};
background-color:${(props)=>props.backg};
border-radius:${(props)=>props.br||"5px"};
border:0;
cursor:pointer;
`