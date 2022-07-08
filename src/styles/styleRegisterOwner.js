import styled from "styled-components";

const ContainerRegisterOwner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
<<<<<<< HEAD
	font-family: "Inter";
	background-color: var(--primary100);
	font-family: "Inter", sans-serif;
=======

	font-family: "Inter";
	background-color: var(--primary100);
	font-family: "Inter", sans-serif;

>>>>>>> 55aca01344e37b6e4ebbe9c25bd13eca616b0a6e
	section {
		background-color: var(--grey300);
		width: 90vw;
		max-width: 450px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 20px;
		gap: 10px;
		padding-bottom: 20px;
	}
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	h1 {
		font-size: 24px;
		margin-top: 15px;
	}
	h3 {
		font-size: 20px;
	}
<<<<<<< HEAD
	p,
	a {
		font-size: 14px;
		font-weight: 600;
		color: var(--grey100);
=======
	p {
		font-size: 14px;
		font-weight: 600;
>>>>>>> 55aca01344e37b6e4ebbe9c25bd13eca616b0a6e
	}
	span {
		color: var(--secondary0);
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		width: 75%;
	}
<<<<<<< HEAD
=======
	label {
		font-size: 16px;
		font-weight: 600;
		padding-bottom: 10px;
	}
	input {
		background-color: var(--grey200);
		padding: 13px;
		border: none;
		border-radius: 10px;
	}
	.error {
		color: var(--negative);
	}
>>>>>>> 55aca01344e37b6e4ebbe9c25bd13eca616b0a6e
`;

export default ContainerRegisterOwner;
