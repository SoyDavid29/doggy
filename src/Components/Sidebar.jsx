import { useState } from "react"

export default function Sidebar(){

      const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
     setMenuOpen(!menuOpen);
     };
 
    return(
        <section className="sidebar">
            <div className="bar">

                <button className={`btn-menu ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                >
                    <div className="stick"></div>
                    <div className="stick"></div>
                    <div className="stick"></div>
                </button>

                <img className="logo1" src="img/pet-logo.svg" alt="" />

                <img  className="logo2" src="img/whatsApp-Logo.svg" alt="logo.whatsapp" />

            </div>
        </section>
    )
}