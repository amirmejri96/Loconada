import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminStyle.css';
import NavB from '../../Components/Navbar 2/NavB';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]); // État pour stocker les utilisateurs récupérés
  const [reservations, setReservations] = useState([]); // État pour stocker les réservations récupérées
  const [reservationModalVisible, setReservationModalVisible] = useState(false); // Affichage de la modal
  const [selectedReservation, setSelectedReservation] = useState(null); // Réservation sélectionnée

  // Récupérer les utilisateurs et réservations du backend
  useEffect(() => {
    axios.get('http://localhost:5000/user/all')
      .then(response => {
        setUsers(response.data.alluser); // Mettre à jour l'état avec tous les utilisateurs
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });

    axios.get('http://localhost:5000/reservation/all')
      .then(response => {
        setReservations(response.data.allreservation || []); // Mettre à jour l'état avec toutes les réservations
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des réservations :", error);
      });
  }, []);


  // Fermer la modal
  const closeModal = () => {
    setReservationModalVisible(false);
  };

  // Supprimer une réservation
  const deleteReservation = (index) => {
    axios.delete(`http://localhost:5000/reservation/${reservations[index]._id}`)
      .then(() => {
        const updatedReservations = reservations.filter((_, i) => i !== index);
        setReservations(updatedReservations);
      })
      .catch(error => {
        console.error("Erreur lors de la suppression de la réservation :", error);
      });
  };

  // Confirmer une réservation
  const confirmReservation = (index) => {
    axios.put(`http://localhost:5000/reservation/${reservations[index]._id}/confirm`)
      .then(() => {
        alert("Réservation confirmée avec succès !");
      })
      .catch(error => {
        console.error("Erreur lors de la confirmation de la réservation :", error);
      });
  };

  // Rejeter une réservation
  const rejectReservation = (index) => {
    axios.put(`http://localhost:5000/reservation/${reservations[index]._id}/reject`)
      .then(() => {
        alert("Réservation rejetée avec succès !");
      })
      .catch(error => {
        console.error("Erreur lors du rejet de la réservation :", error);
      });
  };

  return (
    <div className='Admin'>
      <NavB />

      {/* Tableau des utilisateurs */}
      <div className="container">
        <h2>Liste des utilisateurs</h2>
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Âge</th>
              <th>Email</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tableau des réservations */}
      <div className="container">
        <h2>Liste des réservations</h2>
        <table>
          <thead>
            <tr>
              <th>Nom Complet</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Nombre de tickets</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={reservation._id}>
                <td>{reservation.fullName}</td>
                <td>{reservation.email}</td>
                <td>{reservation.phone}</td>
                <td>{reservation.numberOfTickets}</td>
                <td>
                  <button className="confirm" onClick={() => confirmReservation(index)}>✔️</button>
                  <button className="reject" onClick={() => rejectReservation(index)}>❌</button>
                  <button className="delete" onClick={() => deleteReservation(index)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal pour afficher les détails des réservations */}
      {reservationModalVisible && selectedReservation && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Nom: {selectedReservation.fullName}</h2>
            <p>Email: {selectedReservation.email}</p>
            <p>Téléphone: {selectedReservation.phone}</p>
            <p>Nombre de tickets: {selectedReservation.numberOfTickets}</p>
            <div className="modal-actions">
              <button className="confirm" onClick={() => confirmReservation(reservations.indexOf(selectedReservation))}>✔️ Confirmer</button>
              <button className="reject" onClick={() => rejectReservation(reservations.indexOf(selectedReservation))}>❌ Rejeter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
