import { StyledContainer, StyledInput } from "./styles";

function Input({ label, icon: Icon, register,name, ...rest }) {
  
  return (
    <StyledContainer>
      <div>{label}</div>

      <StyledInput>
        {Icon && <Icon />}
        <input {...rest} {...register(name)}/>
      </StyledInput>
    </StyledContainer>
  );
}

export default Input;
