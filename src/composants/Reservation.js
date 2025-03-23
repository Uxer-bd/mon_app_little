import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import '../Styles/Reservation.css'

const Reservation = () => {
    const handlesubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const elements = form.elements;
        const Nom = elements.Nom.value;
        const email = elements.email.value;
        const numero = elements.numero.value;

        alert (`Merci ${Nom} votre réservation à été enregistré avec succès`)
        form.reset();
    }
    return(
        <>
            <div className='corps'>
                <Nav/>
                {/* <Header/> */}
                <div className="entete_reserver">
                    <p>Réservation de table</p>
                </div>
                <h4>Veillez renseignez vos informations</h4>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="Nom">Nom et prénom</label>
                    <input
                        type="text"
                        id="Nom"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                    <label htmlFor="numero">Numéro</label>
                    <input
                        type="text"
                        id="numero"
                        required
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        required
                    />
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
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>   
        </>
    )
}

export default Reservation;