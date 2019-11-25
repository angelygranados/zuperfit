import React from 'react';
import '../assets/styles/components/Cards.scss';

const Cards = ({ title, children }) => (
    <section className="favorites">
        <h2 className="favorites__title">{title}</h2>
        <div className="container__items">
            {children}
        </div>
    </section>
);

export default Cards;