import { StyledContainer, StyledInput } from "./styles";

function Input({ label, isGray = false, icon: Icon, register, name, ...rest }) {
  return (
    <StyledContainer>
      <div>{label}</div>

      <StyledInput isGray={isGray}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </StyledInput>
    </StyledContainer>
  );
}

export default Input;
