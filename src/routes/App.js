import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import RecipesList from '../containers/RecipesList';
import CartItemList from '../containers/CartItemsList'
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Favorites from '../containers/Favorites';
import Layout from '../containers/Layout';


const App = () => (
    <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/category/:category" component={RecipesList}/>
            <Route path="/cart/:cartType" component={CartItemList}/>
            <Route component={NotFound}/>
        </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;