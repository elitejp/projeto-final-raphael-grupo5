import { StyledContainer, StyledInput } from "./styles";

function Input({ label, isGray = false, icon: Icon, register, name, error, ...rest }) {
	return (
		<StyledContainer>
			<div>
				{label} {!!error && <span> - {error}</span>}
			</div>

			<StyledInput isGray={isGray} isError={!!error}>
				{Icon && <Icon />}
				<input  {...register(name)} {...rest} />
			</StyledInput>
		</StyledContainer>
	);
}

export default Input;
