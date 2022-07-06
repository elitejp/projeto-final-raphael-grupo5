import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Container from '../../styles/styleRegisterOwner'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function RegisterOwner() {
	const URL = 'https://user-and-pets.herokuapp.com'

	const schema = yup.object().shape({
		name: yup.string().required('Campo obrigatório'),
		age: yup.string().required('Campo obrigatório'),
		email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
		password: yup.string().required('Campo obrigatório').min(6, 'Minimo de 6 letras'),
		confirmPassword: yup
			.string()
			.required('Campo obrigatório')
			.min(6, 'Minimo de 6 letras')
			.oneOf([yup.ref('password')], 'Senha não corresponde'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		const { email, password, name, age } = data
		const user = {
			email: email,
			password: password,
			name: name,
			age: age,
		}

		axios
			.post(URL + '/register', user)
			.then((response) => {
				console.log(response)
				toast.success('Cadastrado com sucesso!')
			})
			.catch((err) => {
				let erro = err.response.data
				console.log(erro)
				if (erro === 'Email already exists') {
					toast.error('Email já existe!')
				} else {
					toast.error('Ops! Algo deu errado')
				}
			})
	}

	return (
		<>
			<Container>
				<section>
					<h1>
						i<span>Pet</span>
					</h1>
					<h3>Crie sua conta, rápido e grátis</h3>
					<p>
						Seção do <span>Dono</span>
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label>Nome</label>
							<input
								{...register('name')}
								type='text'
								placeholder='Digite aqui seu nome'
								error={errors.name}
							/>
							<p className='error'>{errors.name?.message}</p>
						</div>

						<div>
							<label>Idade</label>
							<input
								{...register('age')}
								type='text'
								placeholder='Digite aqui sua idade'
								error={errors.age}
							/>
							<p className='error'>{errors.age?.message}</p>
						</div>
						<div>
							<label>Email</label>
							<input
								{...register('email')}
								type='email'
								placeholder='Digite aqui seu email'
								error={errors.email}
							/>
							<p className='error'>{errors.email?.message}</p>
						</div>
						<div>
							<label>Senha</label>
							<input
								{...register('password')}
								type='password'
								placeholder='Digite aqui sua senha'
								error={errors.password}
							/>
							<p className='error'>{errors.password?.message}</p>
						</div>
						<div>
							<label>Confirme sua senha</label>
							<input
								{...register('confirmPassword')}
								type='password'
								placeholder='Digite aqui seu nome'
								error={errors.confirmPassword}
								helperText={errors.confirmPassword?.message}
							/>
							<p className='error'>{errors.confirmPassword?.message}</p>
						</div>

						<button type='submit'>Cadastre-se</button>
						<p>Já possui conta? Faça o login aqui</p>
					</form>
				</section>
			</Container>
		</>
	)
}

export default RegisterOwner
