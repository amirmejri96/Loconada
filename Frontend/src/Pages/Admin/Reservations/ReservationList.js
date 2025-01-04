import React, { useState, useEffect } from 'react';
import './ReservationsStyle.css';
import axios from 'axios';

const ReservationList = () => {
  const [reservation, setReservation] = useState([]); // État pour les réservations récupérées
  const [reservationModalVisible, setReservationModalVisible] = useState(false); // Affichage de la modal
  const [selectedReservation, setSelectedReservation] = useState(null); // Réservation sélectionnée

  // Récupérer les résérvations du backend
  useEffect(() => {
    axios.get('http://localhost:5000/reservation/all')
      .then(response => {
        console.log('Données récupérées :', response.data);
        setReservation(response.data.allreservation || []); // Corrigé pour correspondre à la réponse du backend
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des réservations :", error);
      });
  }, []);

  useEffect(() => {
    console.log('Réservations à afficher :', reservation);
  }, [reservation]);


  // Supprimer une réservation
  const deleteReservation = (index) => {
    axios.delete(`http://localhost:5000/reservation/${reservation[index]._id}`)
      .then(() => {
        const updatedReservation = reservation.filter((_, i) => i !== index);
        setReservation(updatedReservation);
      })
      .catch(error => {
        console.error("Erreur lors de la suppression de la réservation :", error);
      });
  };

  // Confirmer une réservation
  const confirmReservation = (index) => {
    axios.put(`http://localhost:5000/reservation/${reservation[index]._id}/confirm`)
      .then(() => {
        alert("Réservation confirmée avec succès !");
      })
      .catch(error => {
        console.error("Erreur lors de la confirmation de la réservation :", error);
      });
  };

  // Rejeter une réservation
  const rejectReservation = (index) => {
    axios.put(`http://localhost:5000/reservation/${reservation[index]._id}/reject`)
      .then(() => {
        alert("Réservation rejetée avec succès !");
      })
      .catch(error => {
        console.error("Erreur lors du rejet de la réservation :", error);
      });
  };

  // Fermer la modal
  const closeModal = () => {
    setReservationModalVisible(false);
  };

  return (
    <div className="bodyEv">
      {/* Bouton Home */}
      <a href="/privateRoute" className="home-button">☚</a>

      <div className="container">
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
            {reservation.map((reservation, index) => (
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
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // Empêche le clic sur le contenu de fermer la modal
    >
      <span className="close" onClick={closeModal}>&times;</span>
      <h2>Nom: {selectedReservation.fullName}</h2>
      <p>Email: {selectedReservation.email}</p>
      <p>Téléphone: {selectedReservation.phone}</p>
      <p>Nombre de tickets: {selectedReservation.numberOfTickets}</p>
      <div className="modal-actions">
        <button className="confirm" onClick={() => confirmReservation(reservation.indexOf(selectedReservation))}>✔️ Confirmer</button>
        <button className="reject" onClick={() => rejectReservation(reservation.indexOf(selectedReservation))}>❌ Rejeter</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ReservationList;
