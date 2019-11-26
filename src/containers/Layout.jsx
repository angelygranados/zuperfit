import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => (
    <div className="app">
        <Header/>
            <section>
                {children}
            </section>
        <Footer/>
    </div>
    
);

export default Layout;