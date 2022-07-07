import { StyledContainer, StyledInput } from "./styles";

function Input({ label, isGray = false, icon: Icon, ...rest }) {
  return (
    <StyledContainer>
      <div>{label}</div>

      <StyledInput isGray={isGray}>
        {Icon && <Icon />}
        <input {...rest} />
      </StyledInput>
    </StyledContainer>
  );
}

export default Input;
