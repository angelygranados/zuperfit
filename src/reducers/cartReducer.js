
import {
    ADD_FAVOURITE_BEGIN,
    ADD_FAVOURITE_SUCCESS,
    ADD_FAVOURITE_FAILURE,
    ADD_CART_BEGIN,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE

} from '../actions/cartActions'

const initalState = {
    myFavorites:{},
    myShoppingCart:{}
}

const reducer = (state = initalState, action) => {
    switch (action.type){
        case ADD_CART_BEGIN:
            return {
                ...state,
                error:null
            }
        case ADD_CART_SUCCESS:
            return {
                ...state,
                myShoppingCart: [...state.myShoppingCart, action.payload],
                error:null
            }
        case ADD_CART_FAILURE:
            return {
                ...state,
                error:action.payload.error
            }            
            case ADD_FAVOURITE_BEGIN:
                return {
                    ...state,
                    error:null
                }
            case ADD_FAVOURITE_SUCCESS:
                return {
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload],
                    error:null
                }
            case ADD_FAVOURITE_FAILURE:
                return {
                    ...state,
                    error:action.payload.error
                }                
        default:
            return state;
    }
}

export default reducer;