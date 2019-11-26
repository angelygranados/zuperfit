import React from 'react';
import '../assets/styles/components/Weekly.scss';

const Weekly = ({children}) => (
    <section class="weeklyMenu">
        <h2 className="weeklyMenu__title">Tu menú semanal</h2>
        {children}
    </section>
);

export default Weekly;