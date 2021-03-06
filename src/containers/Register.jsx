import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';
import logo from '../assets/static/logo.png';
import loginImage from '../assets/static/loginImage.jpg'

const Register = () => (
    <section className="register">
        <figure className="register__logo">
            <Link to="/"><img src={logo} alt="ZuperFit"/></Link>
        </figure>
        <figure className="register__image">
            <img src={loginImage} alt="Registro ZuperFit"/>
        </figure>
        <div className="login__description">
            <p>Tu eliges qué quieres cocinar y nosotros nos encargamos de llevarte todo lo que necesitas a la puerta de tu casa.</p>
        </div>
        <h2 className="register__title">Regístrate</h2>
        <form action="" className="register__form">
            <input className="input" type="text" placeholder="Nombre"/>
            <input className="input" type="text" placeholder="Correo"/>
            <input type="password" className="input" placeholder="Contraseña"/>
            <button className="button">Registrarme</button>
            </form>
            <div className="register__signIn">
                <span>Ya tengo una cuenta</span>
                <Link to="/login">Iniciar sesión</Link>
            </div>  
        </section>
);

export default Register; 