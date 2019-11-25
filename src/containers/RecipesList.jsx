import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cards from '../components/Cards'
import Item from '../components/Item';

import '../assets/styles/containers/Favorites.scss'

const RecipesList = ({match}) => {

    const {category} = match.params

    const title = category.charAt(0).toUpperCase() + category.slice(1)

    const url = `https://zuperfit-api.herokuapp.com/api/recipe/query/bycategory/${category}`
    console.log('URL',url)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios(url).then( res => setRecipes(res.data))
    },[])

    return (
        <section className="favorites__container">
            <Cards title={title}>
                {recipes.map(recipe =>
                <Item key={recipe._id} {...recipe} isList={true}/>
                 )}
            </Cards>
        </section>
    );
};

    
    

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(RecipesList);