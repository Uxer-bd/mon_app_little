import React from 'react';
import "../Styles/Main.css"
import Nav from './Nav';
import Header from './Header';
import Temoignage from './Temoignage'
import Little from './Little';
import Livraison from '../img/Livraison.svg'

const Main = () => {
    return (
        <div className='corps'>
            <Nav/>
            <Header/>
            <div className='main'>
                <section className='specialite'>
                    <div className='ligne1'>
                        <h4>Spécialité</h4>
                        <button>Commander</button>
                    </div>
                    <div className='menu'>
                        <div className='menu1'>
                            <div className='divImg'></div>
                            <div className='titre'>
                                <p>Salade</p>
                                <span>$12.00</span>
                            </div>
                            <div className='info'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore
                                et dolore magna aliqua
                            </div>
                            <div className='livraison'>
                                <p>Ordre de livraison</p>
                                <img src={Livraison} alt='icon'/>
                            </div>
                        </div>
                        <div className='menu2'>
                        <div className='divImg'></div>
                            <div className='titre'>
                                <p>Lemon dessert</p>
                                <span>$9.00</span>
                            </div>
                            <div className='info'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore
                                et dolore magna aliqua
                            </div>
                            <div className='livraison'>
                                <p>Ordre de livraison</p>
                                <img src={Livraison} alt='icon'/>
                            </div>
                        </div>
                        <div className='menu3'>
                        <div className='divImg'></div>
                            <div className='titre'>
                                <p>Bruchetta</p>
                                <span>$24.00</span>
                            </div>
                            <div className='info'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore
                                et dolore magna aliqua
                            </div>
                            <div className='livraison'>
                                <p>Ordre de livraison</p>
                                <img src={Livraison} alt='icon'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='little'>
                </section>
            </div>
            <Little/>
            <Temoignage/>
        </div>
    );
};

export default Main;