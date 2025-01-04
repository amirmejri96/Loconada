import React from 'react';
import './UserStyle.css';
import NavB from '../../Components/Navbar 2/NavB';


const UserDashboard = () => {
  return (
   <> <div className='Admin'>
    
  
      <NavB/>
    <div className="content">
        <div className="event-card">
            <img src="/assets/Affiche a venir.jpg" alt="EventPhoto"/>
            <div className="info">
                <h3>LOCONADA</h3>
                <p><strong style={{color:'black'}}>Édition:</strong> 4ème édition</p>
                <p><strong style={{color:'black'}}>Description:</strong> Soyez pret à vivre une soirée unique pour cloturer l'année en beauté.</p>
                <p><strong style={{color:'black'}}>Lieu:</strong> Molo, Gammarth</p>
                <p><strong style={{color:'black'}}>Date:</strong> 29 décembre 2024</p>
                <p><strong style={{color:'black'}}>Lineup:</strong> Malko, Astrid, Anis Houissa, Ghassen Azaiez, Baros, Zof</p>
                <p><strong style={{color:'black'}}>Prix des tickets:</strong> Regular : 20dt | Couple : 30dt | 3 Girls : 60dt</p>
            </div>
            <a href="/reservation" className="reserve-btn">Réserver vos tickets</a>
        </div>
    </div>
    </div>
    </>
  );
};

export default UserDashboard;