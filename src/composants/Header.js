import React from 'react';
import "../Styles/Header.css"
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className='header'>
            <div className='fond'>
                <h1 className='child' >Litte lemon</h1>
                <h4>Chigago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua</p>
                <Link to={"/reserve"}><button>Réserver une table</button></Link>
            </div>
            <div className='cadre'></div>
        </header>
    );
};

export default Header;