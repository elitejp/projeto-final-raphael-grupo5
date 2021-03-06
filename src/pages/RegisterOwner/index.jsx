import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContainerRegisterOwner from "../../styles/styleRegisterOwner.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiOwner } from "../../services/index.js";
import Button from "../../components/Button/index.jsx";
import Input from "../../components/Input/index.jsx";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

function RegisterOwner() {
	const history= useHistory()
	const [loading, setLoading] = useState(false)
	const schema = yup.object().shape({
		name: yup.string().required("Campo obrigatório").min(3, "Minimo de 3 letras"),
		age: yup.string().required("Campo obrigatório"),
		email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
		telephone: yup.string().required("Campo obrigatório").min(9, "Minimo de 9 digitos"),
		password: yup.string().required("Campo obrigatório").min(6, "Minimo de 6 letras"),
		confirmPassword: yup
			.string()
			.required("Campo obrigatório")
			.min(6, "Minimo de 6 letras")
			.oneOf([yup.ref("password")], "Senha não corresponde"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const { email, password, name, telephone, age } = data;
		const user = {
			email: email,
			password: password,
			name: name,
			telephone: telephone,
			age: age,
		};

		setLoading(true)
		apiOwner
			.post("/register", user)
			.then((response) => {
				console.log(response);
				toast.success("Cadastrado com sucesso!");
				history.push("/login-dono")
			})
			.catch((err) => {
				let erro = err.response.data;
				console.log(erro);
				if (erro === "Email already exists") {
					toast.error("Email já existe!");
				} else {
					toast.error("Ops! Algo deu errado");
				}
			}).finally(() => {
				setLoading(false)
			});
			
	};

	return (
		<>
			<ContainerRegisterOwner>
				<section>
					<h1>
						i<span>Pet</span>
					</h1>
					<h3>Crie sua conta, rápido e grátis</h3>
					<p>
						Seção do <span>Dono</span>
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							isGray
							label="Nome"
							placeholder="Digite seu nome"
							register={register}
							name="name"
							error={errors.name?.message}
						/>

						<Input
							isGray
							label="Idade"
							placeholder="Digite sua idade"
							register={register}
							name="age"
							error={errors.age?.message}
						/>

						<Input
							isGray
							label="Email"
							placeholder="Digite seu email"
							register={register}
							name="email"
							error={errors.email?.message}
						/>
						<Input
							isGray
							label="telephone"
							placeholder="Digite seu email"
							register={register}
							name="telephone"
							error={errors.telephone?.message}
						/>

						<Input
							isGray
							label="Senha"
							type="password"
							placeholder="Digite sua senha"
							register={register}
							name="password"
							error={errors.password?.message}
						/>

						<Input
							isGray
							label="Confirme sua senha"
							type="password"
							placeholder="Confirme sua senha"
							register={register}
							name="confirmPassword"
							error={errors.confirmPassword?.message}
						/>

						{loading && <p className="span-loading">CARREGANDO...</p>}
						<Button type="submit">Cadastre-se</Button>
						<Link to={"/login-dono"}>Já possui conta? Faça o login aqui</Link>
					</form>
				</section>
			</ContainerRegisterOwner>
		</>
	);
}

export default RegisterOwner;
