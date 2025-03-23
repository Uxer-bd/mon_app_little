import React from 'react';
import "../Styles/Nav.css";
import { Link } from 'react-router';
import Logo from '../img/Logo .svg'

const Nav = () => {
    return (
        <nav>
            <div className='onglet'>
                <div><a href='/'><img src={Logo}/></a></div>
                <div><a href='/'>Accueil</a></div>
                <div><a href='#'>A propos de</a></div>
                <div><a href='#'>Menus</a></div>
                <div><a href='/reserve'>Reservation</a></div>
                <div><a href='#'>Commande en ligne</a></div>
                <div><a href='#'>Connexion</a></div>
            </div>
        </nav>
    );
};

export default Nav;