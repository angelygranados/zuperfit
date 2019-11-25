import React,{ useEffect, useState} from 'react'
import Item from '../components/Item'
import Cards from '../components/Cards'
import axios from 'axios'

import '../assets/styles/containers/Favorites.scss'

const CartItemsList = ({match}) => {

    const {cartType} = match.params

    const url = `https://zuperfit-api.herokuapp.com/api/cart?customer=5dce024a08a46e05ac8e2dd1&type=${cartType}`

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(url).then( res => setRecipes(res.data))

    },[recipes])


    return (
        <section className="favorites__container">
            <Cards title={cartType==='Cart'? 'Carrito de Compras' : 'Mis Favoritos'}>
                {recipes.map(recipe =>
                <Item key={recipe._id} {...recipe} isList={true}/>
                 )}
            </Cards>
        </section>
    )

}

export default CartItemsList