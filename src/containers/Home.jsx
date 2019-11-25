import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Item from '../components/Item';
import axios from 'axios'
// import Summary from '../components/Summary'
function getRandomId(recipesIds) {
    let max = Math.max(...recipesIds) 
    let min = Math.min(...recipesIds)
    return Math.floor(Math.random() * (max - min)) + min;
}


const Home = ({recipes}) => {

    const [recipe, setRecipe] = useState([])

    useEffect(()=>{
        const url = `http://localhost:9090/api/recipe/daily`
        axios.get(url).then( res => setRecipe(res.data))        
    },[])

        return (
        <div className="Home">
            <Search />
            <Categories />
            <Featured>
                {<Item key={recipe._id}{...recipe} isLists= {true}/>}
            </Featured>
           
        </div>
        
    );
};

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        myFavorites: state.myFavorites,
        myShoppingCart: state.myShoppingCart
    };
};


export default connect(mapStateToProps, null)(Home);