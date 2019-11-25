import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Search.scss';
import lens from '../assets/static/search.png';

const Search = ({dispatch}) =>(
    <section className="search">
        <div className="search__input">
            <input type="text" className="input" placeholder="¿Qué quieres comer hoy?"/>
            <figure className="search__input--icon"><Link to=""><img src={lens} alt="buscar"/></Link></figure>
        </div>
    </section>
);

export default Search;