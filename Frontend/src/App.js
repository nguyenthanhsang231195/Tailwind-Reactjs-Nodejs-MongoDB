import React from 'react';
import './App.css';

// Components
import { Navbar } from './Components/HeaderComponents/Navbar';

function App() {
    return (
<div className="App">
    <header className="header-website">
        <Navbar />
    </header> 

    <main className="main-website">
        Main
    </main>

    <footer className="footer-website">
        Designed by Sang 2021
    </footer>
</div>
    );
}

export default App;
