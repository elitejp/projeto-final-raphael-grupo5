import { StyledContainer, StyledInput } from "./styles";

<<<<<<< HEAD
function Input({ label, isGray = false, icon: Icon, register, name, error, ...rest }) {
	return (
		<StyledContainer>
			<div>
				{label} {!!error && <span> - {error}</span>}
			</div>

			<StyledInput isGray={isGray} isError={!!error}>
				{Icon && <Icon />}
				<input {...register(name)} {...rest} />
=======
function Input({ label, icon: Icon, ...rest }) {
	console.log(rest);
	return (
		<StyledContainer>
			<div>{label}</div>

			<StyledInput>
				{Icon && <Icon />}
				<input {...rest} />
>>>>>>> 55aca01344e37b6e4ebbe9c25bd13eca616b0a6e
			</StyledInput>
		</StyledContainer>
	);
}

export default Input;
