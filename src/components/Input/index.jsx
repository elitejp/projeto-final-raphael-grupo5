import { StyledContainer, StyledInput } from "./styles";

function Input({ label, icon: Icon, ...rest }) {
  return (
    <StyledContainer>
      <div>{label}</div>

      <StyledInput>
        {Icon && <Icon />}
        <input {...rest} />
      </StyledInput>
    </StyledContainer>
  );
}

export default Input;
