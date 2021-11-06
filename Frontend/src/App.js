import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './Components/HeaderComponents/Navbar/Navbar';
import { Dropdown } from './Components/HeaderComponents/Navbar/Dropdown';
import Footer from './Components/FooterComponents/Footer';

// Screen
import HomeScreen from './Screens/HomeScreen';
import CategoryScreen from './Screens/CategoryScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
    return (
<BrowserRouter>
<div className="App">
    <header className="header-website">
        <Navbar />
        <Dropdown />
    </header> 

    <main className="main-website">
        {/* HomeScreen */}
        <Route path="/" component={HomeScreen} exact />

        {/* Screen */}
        <Route path="/category" component={CategoryScreen} exact />
        <Route path="/product/:slug" component={ProductScreen} />
    </main>

    <footer className="footer-website">
        <Footer />
    </footer>
</div>
</BrowserRouter>

    );
}

export default App;
