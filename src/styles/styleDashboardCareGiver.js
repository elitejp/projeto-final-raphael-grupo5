import styled from "styled-components";

const ContainerDashboardCareGiver = styled.div`
	background-color: var(--grey300);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	font-family: "Inter", sans-serif;
	font-weight: 600;
	gap: 5px;

	.infoCaregiver {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		img {
			width: 50px;
			height: 50px;
			border-radius: 100%;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 15px;
		}
	}

	.infoOwners {
		border: 4px solid var(--secondary100);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		padding: 10px;
		gap: 30px;

		li {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 100%;
		}

		div {
			display: flex;
			justify-content: space-between;

			p:nth-child(1) {
				font-weight: 600;
			}
		}
	}

	.infoPets {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-weight: 400;

		li {
			background-color: var(--primary200);
			border-radius: 5px;
			padding: 7px;

			div {
				background-color: var(--primary300);
				padding: 2px 5px 2px 5px;
			}
		}
		.obsPet {
			flex-direction: column;
			gap: 5px;
		}
	}

	.buttons {
		display: flex;
		gap: 20px;
		justify-content: space-between;
		padding: 10px;
	}

	@media (min-width: 600px) {
		justify-content: center;
		align-items: center;
		.container {
			max-width: 600px;
			width: 100vw;

			display: flex;
			flex-direction: column;
		}
	}
`;

export default ContainerDashboardCareGiver;
