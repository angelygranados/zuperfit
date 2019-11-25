import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Categories.scss';
import breakfast from '../assets/static/breakfast.jpg';
import lunch from '../assets/static/lunch.jpg';
import fastfood from '../assets/static/fastfood.jpg';
import dessert from '../assets/static/dessert.jpg';

const Categories = () => (
    <section className="categories">
        <div className="categories__item">            
            <Link to="/category/Desayuno"><img className="categories__item--image" src={breakfast} alt="Desayunos"/>
            <h3 className="categories__item--title">Desayunos</h3>
            </Link>
        </div>
        <div className="categories__item">
                <Link to="/category/almuerzo"><img className="categories__item--image" src={lunch} alt="Almuerzos"/>
                <h3 className="categories__item--title">Almuerzos</h3></Link>
        </div>
        <div className="categories__item">
                <Link to="/category/comida_rapida"><img className="categories__item--image" src={fastfood} alt="Comida rápida"/>
                <h3 className="categories__item--title">Fast food</h3></Link>
        </div>
        <div className="categories__item">
                <Link to="/category/postres"><img className="categories__item--image" src={dessert} alt="Postres"/>
                <h3 className="categories__item--title">Postres</h3></Link>
        </div>
    </section>
);

export default Categories;