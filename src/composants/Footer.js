import React from 'react';
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <div className='pied_page'>
            <div className='space'>
                <div className='image'></div>
                <div className='lien'>
                    <h4>Lien utile</h4>
                    <p>Home</p>
                    <p>A propos de</p>
                    <p>Menu</p>
                    <p>Réservation</p>
                    <p>Commander en ligne</p>
                    <p>Connexion</p>
                </div>
                <div className='contact'>
                <h4>Contact</h4>
                    <p>Adresse</p>
                    <p>Numéro de téléphone</p>
                    <p>Email</p>
                </div>
                <div className='social'>
                <h4>Lien réseau social</h4>
                    <p>Adresse</p>
                    <p>Numéro de téléphone</p>
                    <p>Email</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;