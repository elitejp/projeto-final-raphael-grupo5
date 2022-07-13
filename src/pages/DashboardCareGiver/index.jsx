import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { apiCare } from "../../services";
import ContainerDashboardCareGiver from "../../styles/styleDashboardCareGiver";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import CreateModal from "../../components/Modals";
import StyleModalDashboardcare from "../../styles/styleModalDashboardCare";

function DashboardCareGiver() {
	const token = localStorage.getItem("Token");
	const user = JSON.parse(localStorage.getItem("User"));

	const [requests, setRequests] = useState([]);
	const [haveRequests, setHaveRequests] = useState(false);

	const [accepted, setAccepted] = useState([]);
	const [haveAccepted, setHaveAccepted] = useState(false);

	const [showRequest, setShowRequest] = useState(true);
	const [showAccepted, setShowAccepted] = useState(false);

	const [modalExclude, setModalExclude] = useState(false);
	const [modalAccept, setModalAccept] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);

	const [idExclude, setIdExclude] = useState("");
	const [elAccept, setElAccept] = useState("");
	const [elIdDelete, setElIdDelete] = useState("");

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
					setHaveRequests(false);
				} else {
					setHaveRequests(true);
				}
			})
			.catch((err) => {
				if (err.response.data === "jwt expired") {
					toast.error("Seu login expirou! logue novamente.");
				}
			});
	}, [user.id, token, requests]);

	function deleteRequest(id, verify) {
		setModalDelete(false);
		apiCare
			.delete(`/request/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				if (verify !== "accept") {
					toast.success("Recusado com sucesso!");
				}
			})
			.catch((err) => {
				console.log(err);
				toast.error("Algo deu errado!");
			});
	}

	function acceptRequest(data) {
		setModalAccept(false);
		const user = {
			email: data.email,
			name: data.name,
			telephone: data.telephone,
			age: data.age,
			initial_date: data.initial_date,
			final_date: data.final_date,
			userId: data.userId,
			pet: data.pet,
		};

		apiCare
			.post("/accepted", user, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res);
				toast.success("Aceito com sucesso!");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Algo deu errado!");
			});

		deleteRequest(data.id, "accept");
	}

	useEffect(() => {
		apiCare
			.get(`/users/${user.id}?_embed=accepted`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setAccepted(response.data.accepted);
				if (response.data.accepted.length === 0) {
					setHaveAccepted(false);
				} else {
					setHaveAccepted(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [token, user.id, accepted]);

	function excludeService(id) {
		setModalExclude(false);
		apiCare
			.delete(`/accepted/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log(response);
				toast.success("Finalizado com sucesso!");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Ops, algo deu errado!");
			});
	}

	return (
		<>
			{modalExclude ? (
				<CreateModal>
					<StyleModalDashboardcare>
						<p>Tem certezar que deseja finalizar o pedido?</p>
						<div className="buttons">
							<Button isGray onClick={() => setModalExclude(false)}>
								Cancelar
							</Button>
							<Button onClick={() => excludeService(idExclude)}>
								Finalizar
							</Button>
						</div>
					</StyleModalDashboardcare>
				</CreateModal>
			) : (
				<></>
			)}
			{modalAccept ? (
				<CreateModal>
					<StyleModalDashboardcare>
						<p>Tem certezar que deseja aceitar o pedido?</p>
						<div className="buttons">
							<Button isGray onClick={() => setModalAccept(false)}>
								Cancelar
							</Button>
							<Button onClick={() => acceptRequest(elAccept)}>Aceitar</Button>
						</div>
					</StyleModalDashboardcare>
				</CreateModal>
			) : (
				<></>
			)}
			{modalDelete ? (
				<CreateModal>
					<StyleModalDashboardcare>
						<p>Tem certezar que deseja cancelar o pedido?</p>
						<div className="buttons">
							<Button isGray onClick={() => setModalDelete(false)}>
								Cancelar
							</Button>
							<Button onClick={() => deleteRequest(elIdDelete)}>Deletar</Button>
						</div>
					</StyleModalDashboardcare>
				</CreateModal>
			) : (
				<></>
			)}
			<Header />
			<ContainerDashboardCareGiver>
				<div className="container">
					<div className="infoCaregiver">
						<h2>Cuidador</h2>
						<div>
							<p>{user.name}</p>
							<img
								src="https://2021.ieee-laus.org/wp-content/uploads/sites/48/2021/09/coming-soon.jpg"
								alt="perfil"
							/>
						</div>
					</div>
					<div className="buttons">
						<Button
							isGray={!showRequest}
							onClick={() => {
								setShowRequest(true);
								setShowAccepted(false);
							}}
						>
							Donos interessados
						</Button>
						<Button
							isGray={!showAccepted}
							onClick={() => {
								setShowAccepted(true);
								setShowRequest(false);
							}}
						>
							Pedidos aceitos
						</Button>
					</div>
					{showRequest ? (
						<>
							<ul className="infoOwners">
								{haveRequests ? (
									requests.map((el, index) => (
										<li key={el.name + index}>
											<div>
												<p>Nome do dono:</p>
												<p>{el.name}</p>
											</div>
											<div>
												<p>Número de pets:</p>
												<p>{el.pet.length}</p>
											</div>

											<div>
												<p>Data inicial:</p>
												<p>{el.initial_date || "Sem informação"}</p>
											</div>
											<div>
												<p>Data final:</p>
												<p>{el.final_date || "Sem informação"}</p>
											</div>
											<div>
												<p>Telefone de contato:</p>
												<p>{el.telephone || "Sem informação"}</p>
											</div>
											<ul className="infoPets">
												{el.pet?.map((el, index) => (
													<li key={index}>
														<h3>Pet: {el.name || "Sem informação"}</h3>
														<div>
															<p>Nome:</p>
															<p>{el.name || "Sem informação"}</p>
														</div>
														<div>
															<p>Tipo de animal:</p>
															<p>{el.type || "Sem informação"}</p>
														</div>
														<div>
															<p>Idade:</p>
															<p>{el.age || "Sem informação"}</p>
														</div>
														<div>
															<p>Porte físico:</p>
															<p>{el.physical_shape || "Sem informação"}</p>
														</div>
														<div>
															<p>Raça:</p>
															<p>{el.breed || "Sem informação"}</p>
														</div>
														<div className="obsPet">
															<p>Observações e cuidados:</p>
															<p>{el.note || "Sem informação"}</p>
														</div>
													</li>
												))}
											</ul>
											<div className="buttons">
												<Button
													onClick={() => {
														setElAccept(el);
														setModalAccept(true);
													}}
												>
													Aceitar
												</Button>
												<Button
													onClick={() => {
														setElIdDelete(el.id);
														setModalDelete(true);
													}}
												>
													Recusar
												</Button>
											</div>
										</li>
									))
								) : (
									<p>Você ainda não possui requisições!</p>
								)}
							</ul>
						</>
					) : (
						<></>
					)}

					{showAccepted ? (
						<ul className="infoOwners">
							{haveAccepted ? (
								accepted.map((el, index) => (
									<li key={el.name + index}>
										<div>
											<p>Nome do dono:</p>
											<p>{el.name}</p>
										</div>
										<div>
											<p>Número de pets:</p>
											<p>{el.pet.length}</p>
										</div>

										<div>
											<p>Data inicial:</p>
											<p>{el.initial_date || "Sem informação"}</p>
										</div>
										<div>
											<p>Data final:</p>
											<p>{el.final_date || "Sem informação"}</p>
										</div>
										<div>
											<p>Telefone de contato:</p>
											<p>{el.telephone || "Sem informação"}</p>
										</div>
										<ul className="infoPets">
											{el.pet?.map((el, index) => (
												<li key={index}>
													<h3>Pet: {el.name || "Sem informação"}</h3>
													<div>
														<p>Nome:</p>
														<p>{el.name || "Sem informação"}</p>
													</div>
													<div>
														<p>Tipo de animal:</p>
														<p>{el.type || "Sem informação"}</p>
													</div>
													<div>
														<p>Idade:</p>
														<p>{el.age || "Sem informação"}</p>
													</div>
													<div>
														<p>Porte físico:</p>
														<p>{el.physical_shape || "Sem informação"}</p>
													</div>
													<div>
														<p>Raça:</p>
														<p>{el.breed || "Sem informação"}</p>
													</div>
													<div className="obsPet">
														<p>Observações e cuidados:</p>
														<p>{el.note || "Sem informação"}</p>
													</div>
												</li>
											))}
										</ul>
										<div className="buttons">
											<Button
												onClick={() => {
													setIdExclude(el.id);
													setModalExclude(true);
												}}
											>
												Finalizar
											</Button>
										</div>
									</li>
								))
							) : (
								<p>Você ainda não possui requisições!</p>
							)}
						</ul>
					) : (
						<></>
					)}
				</div>
			</ContainerDashboardCareGiver>
		</>
	);
}

export default DashboardCareGiver;
