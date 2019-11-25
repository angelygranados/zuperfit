import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import priceIcon from '../assets/static/servings.png';
import list from '../assets/static/list.png';
import clock from '../assets/static/time.png';
import cart from '../assets/static/cart.png';
import removeIcon from '../assets/static/minus.png';
import favoritesIcon from '../assets/static/favorites.png';
import {addItemToFavourites, addItemToShoppingCart} from '../actions/cartActions'
import '../assets/styles/components/Item.scss';

const Item = (props) => {

    const {title, images, price, prepTime, description, _id, isList} = props;

    const handleSetFavorite = () =>{
        props.dispatch(addItemToFavourites(_id,'WishList'))
    }
    const handleDeleteFavorite = (itemId) =>{
        props.deleteFavorite(itemId)
    }

    const handleSetShoppingCart = () =>{
        props.dispatch(addItemToShoppingCart(_id,'Cart'))
    }

    return(
        <div className="featured__item">
            <div className="featured__item--featured">
                <a href="#" className="featured__item--featured__link" onClick={e => {this.showModal()}}>
                    <h3 className="featured__item--featured__title">{title}</h3>
                    <img className="featured__item--featured__image" src={images} alt="desayuno"/>
                </a>
            </div>
            <div className="featured-item__details">
                <div className="featured-item__details--resume">
                    <img src={priceIcon}/><span className="featured-item__details--resume_span">{price}</span>
                    <img src={list}/><span className="featured-item__details--resume_span">{5}</span>
                    <img src={clock}/><span className="featured-item__details--resume_span">{prepTime}</span>
                </div>
                <div className="featured-item__details--buttons">
                    {isList === true ? <img 
                        className="featured-item__details--buttons--img" 
                        src={removeIcon} 
                        alt="Eliminar de favoritos"
                        onClick={() => handleDeleteFavorite} 
                    /> : <img 
                    className="featured-item__details--buttons--img" 
                    src={favoritesIcon} 
                    alt="Guardar en favoritos"
                    onClick={handleSetFavorite} 
                />}
                    
                    
                    <img className="featured-item__details--buttons--img" src={cart} alt="Comprar" 
                        onClick={handleSetShoppingCart}
                    />
                </div>
            </div>
            <div className="featured__item--description">
                <p className="featured__item--description--text">{description}</p>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps)(Item);