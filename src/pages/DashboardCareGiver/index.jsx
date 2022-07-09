import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { apiCare } from "../../services";
import ContainerDashboardCareGiver from "../../styles/styleDashboardCareGiver";
import Button from "../../components/Button";
import { toast } from "react-toastify";

function DashboardCareGiver() {
	const token = localStorage.getItem("Token");
	const user = JSON.parse(localStorage.getItem("User"));
	const [requests, setRequests] = useState([]);
	const [showRequests, setShowRequests] = useState(false);

	useEffect(() => {
		apiCare
			.get(`/users/${user.id}?_embed=request`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setRequests(response.data.request);
				if (response.data.request.length === 0) {
					setShowRequests(false);
				} else {
					setShowRequests(true);
				}
			})
			.catch((err) => {
				if (err.response.data === "jwt expired") {
					toast.error("Seu login expirou! logue novamente.");
				}
			});
	}, [user.id, token]);

	return (
		<>
			<Header />
			<ContainerDashboardCareGiver>
				<div className="container">
					<div className="infoCaregiver">
						<h2>Cuidador</h2>
						<div>
							<p>{user.name}</p>
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
								alt="perfil"
							/>
						</div>
					</div>
					<p>Donos interessados</p>
					<ul className="infoOwners">
						{showRequests ? (
							requests.map((el) => (
								<li>
									<div>
										<p>Nome do dono:</p>
										<p>{el.name}</p>
									</div>
									<div>
										<p>Número de pets:</p>
										<p>{el.pet.length}</p>
									</div>

									<div>
										<p>Dias necessários:</p>
										<p>Não tem na API</p>
									</div>
									<div>
										<p>Telefone de contato:</p>
										<p>Não tem na API</p>
									</div>
									<ul className="infoPets">
										{el.pet?.map((el) => (
											<li>
												<h3>Pet: {el.nome}</h3>
												<div>
													<p>Nome:</p>
													<p>{el.nome}</p>
												</div>
												<div>
													<p>Tipo de animal:</p>
													<p>{el.tipo}</p>
												</div>
												<div>
													<p>Idade:</p>
													<p>{el.idade}</p>
												</div>
												<div>
													<p>Porte físico:</p>
													<p>{el.porte_físico}</p>
												</div>
												<div>
													<p>Raça:</p>
													<p>{el.raca}</p>
												</div>
												<div className="obsPet">
													<p>Observações e cuidados:</p>
													<p>{el.observações_cuidados}</p>
												</div>
											</li>
										))}
									</ul>
									<Button>Aceitar</Button>
									<Button>Recusar</Button>
								</li>
							))
						) : (
							<p>Você ainda não possui requisições!</p>
						)}
					</ul>
				</div>
			</ContainerDashboardCareGiver>
		</>
	);
}

export default DashboardCareGiver;
