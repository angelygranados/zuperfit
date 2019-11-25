import axios from 'axios'

const URL = 'https://zuperfit-api.herokuapp.com'

export const ADD_FAVOURITE_BEGIN = 'ADD_FAVOURITE_BEGIN'

export const ADD_FAVOURITE_SUCCESS = 'ADD_FAVOURITE_SUCCESS'

export const ADD_FAVOURITE_FAILURE = 'ADD_FAVOURITE_FAILURE'

export const ADD_CART_BEGIN = 'ADD_CART_BEGIN'

export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS'

export const ADD_CART_FAILURE = 'ADD_CART_FAILURE'


export const addFavouriteBegin = () => ({type:ADD_FAVOURITE_BEGIN })

export const addFavouriteSuccess = cart => ({
    type:ADD_FVOURITE_SUCCESS,
    payload: {cart}
})

export const addFavouriteFailure = error => ({
    type:ADD_FAVOURITE_FAILURE,
    payload: {error}
})



export const addCartBegin = () => ({type:ADD_CART_BEGIN })

export const addCartSuccess = cart => ({
    type:ADD_CART_SUCCESS,
    payload: {cart}
})

export const addCartFailure = error => ({
    type:ADD_CART_FAILURE,
    payload: {error}
})


export function addItemToFavourites(id,type = 'WishList'){
    return dispatch => {
        
        const data = {
            item:id,
            type,
            customer:'5dce024a08a46e05ac8e2dd1'
        }

        dispatch(addFavouriteBegin())

        return axios.post(`https://zuperfit-api.herokuapp.com/api/cart`,data)
            .then(response => {
                dispatch(addFavouriteSuccess(response.data))
                return response.data
            })
            .catch( error => {
                dispatch(addFavouriteFailure(error))
            })
    }
}

export function addItemToShoppingCart(id,type = 'Cart'){
    return dispatch => {
        
        const data = {
            item:id,
            type,
            customer:'5dce024a08a46e05ac8e2dd1'
        }

        dispatch(addCartBegin())

        return axios.post(`https://zuperfit-api.herokuapp.com/api/cart`,data)
            .then(response => {
                dispatch(addCartSuccess(response.data))
                return response.data
            })
            .catch( error => {
                dispatch(addCartFailure(error))
            })
    }
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }