import react from "react";
import "../Styles/Temoignage.css"

const Temoignage = () => {
    return (
        <div className="temoignage">
            <h1>Témoignage</h1>
            <div className="cellule">
                <div className="card">
                    <div className="photo"></div>
                    <p className="nom">Name</p>
                    <p>Commentaire</p>
                </div>
                <div className="card">
                    <div className="photo"></div>
                    <p className="nom">Name</p>
                    <p>Commentaire</p>
                </div>
                <div className="card">
                    <div className="photo"></div>
                    <p className="nom">Name</p>
                    <p>Commentaire</p>
                </div>
                <div className="card">
                    <div className="photo"></div>
                    <p className="nom">Name</p>
                    <p>Commentaire</p>
                </div>
            </div>
        </div>
    )
}

export default Temoignage;