import React from 'react';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import Item from '../components/Item';

import '../assets/styles/containers/Favorites.scss'




const Favorites = ({myFavorites}) => {
    return (
        <section className="favorites__container">
            <Cards>
                {myFavorites.map(recipe =>
                <Item key={recipe.id} {...recipe}/>
                 )}
            </Cards>
        </section>
    );
};

    
    

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Favorites);