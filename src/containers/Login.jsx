import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Login.scss';
import logo from '../assets/static/logo.png';
import loginImage from '../assets/static/loginImage.jpg';

const Login = () => {
    const [form, setValues] = useState({
        email: '',
    });
    const handleInput = event => {
        setValues({
            ...form, 
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);

    }
    return(
    <section className="login">
            <figure className="login__logo">
                <Link to="/"><img src={logo} alt="ZuperFit"/></Link>
            </figure>
            <div className="login__description">
                <p>Tu eliges qué quieres cocinar y nosotros nos encargamos de llevarte todo lo que necesitas a la puerta de tu casa.</p>
            </div>
            <figure className="login__image">
                <img src={loginImage} alt="Registro ZuperFit"/>
            </figure>
            <h2 className="login__title">Iniciar sesión</h2>
            <form action="" className="login__form" onSubmit={handleSubmit}>
                <input name="email" className="input" type="text" placeholder="Correo" onChange={handleInput}/>
                <input name="password" type="password" className="input" placeholder="Contraseña" onChange={handleInput}/>
                <button className="button">Iniciar sesión</button>
            </form>
            <div className="login__signIn">
                <span>No tengo una cuenta</span>
                <br></br>
                <Link to="/register">Registrarme</Link>
            </div>
    </section>
    )
};

export default Login; 