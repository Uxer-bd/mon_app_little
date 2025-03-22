import React from 'react';
import "../Styles/Nav.css";
import { Link } from 'react-router';
import Logo from '../img/Logo .svg'

const Nav = () => {
    return (
        <nav>
            <div className='onglet'>
                <div><img src={Logo}/></div>
                <div>Accueil</div>
                <div>A propos de</div>
                <div>Menus</div>
                <div>Reservation</div>
                <div>Commande en ligne</div>
                <div>Connexion</div>
            </div>
        </nav>
    );
};

export default Nav;