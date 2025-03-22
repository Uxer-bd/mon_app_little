import React from "react";
import Nav from "./Nav";
import Header from "./Header";

const Reservation = () => {
    const handlesubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const elements = form.elements;
        const Nom = elements.Nom.value;
        const email = elements.email.value;
        const numero = elements.numero.value;

        alert (`Nom: ${Nom}`)
        form.reset();
    }
    return(
        <>
            <div className='corps'>
                <Nav/>
                <Header/>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="Nom">Nom et prénom</label>
                    <input
                        type="text"
                        id="Nom"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                    />
                    <label htmlFor="numero">Numéro</label>
                    <input
                        type="text"
                        id="numero"
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                    />
                    {/* <label htmlFor="occasion">Occasion</label>
                    <input
                        type="select"
                        id="occasion"
                    /> */}
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" required>
                    <option value="">Choisir l'évènement</option>
                    <option>Anniversaire</option>
                    <option>Mariage</option>
                    <option>Promotion</option>
                    <option>Retrouvail</option>
                    </select>

                    <label htmlFor="place">Nombre de places</label>
                    <input
                        type="number"
                        id="place"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>   
        </>
    )
}

export default Reservation;