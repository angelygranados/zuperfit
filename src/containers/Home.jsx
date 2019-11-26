import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Item from '../components/Item';
import axios from 'axios'
import Weekly from '../components/Weekly';
import WeeklyItem from '../components/WeeklyItem';
import FeaturedSection from '../components/FeaturedSection';

function getRandomId(recipesIds) {
    let max = Math.max(...recipesIds) 
    let min = Math.min(...recipesIds)
    return Math.floor(Math.random() * (max - min)) + min;
}


const Home = ({recipes}) => {
    const [weekly, setWeekly] = useState([])
    const [recipe, setRecipe] = useState([])

    useEffect(()=>{
        const daily = `https://zuperfit-api.herokuapp.com/api/recipe/daily`
        const weeklyURL = `https://zuperfit-api.herokuapp.com/api/recipe/weekly/recipes/rec`
        axios.get(daily).then( res => setRecipe(res.data))
        axios.get(weeklyURL).then( res => setWeekly(res.data))       
    },[])
        return (
        <div className="Home">
            <Search />
            <Categories />
            <FeaturedSection>
                <Featured>
                    {<Item key={recipe._id}{...recipe} isLists= {true}/>}
                </Featured>
                <Weekly>
                    {weekly.map( item =>
                    <WeeklyItem key={item} {...item}/>
                    )}
                </Weekly>
            </FeaturedSection>
            
           
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