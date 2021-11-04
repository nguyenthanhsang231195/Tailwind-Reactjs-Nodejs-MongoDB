import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './Components/HeaderComponents/Navbar/Navbar';
import { Dropdown } from './Components/HeaderComponents/Navbar/Dropdown';

// Screen
import HomeScreen from './Screens/HomeScreen/HomeScreen';

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
    </main>

    <footer className="footer-website">
        Designed by Sang 2021
    </footer>
</div>
</BrowserRouter>

    );
}

export default App;
