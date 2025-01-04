import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import PrivateRoute from './Pages/Authentification/PrivateRoute';
import Accueil from './Pages/Accueil/Accueil';
import Footer from './Components/Footer';
import About from './Pages/About/About';
import Edition from './Pages/Editions/Edition';
import Reservation from './Pages/Reservation/Reservation';
import Users from '../src/Pages/Admin/Users/Users';
import ReservationList from '../src/Pages/Admin/Reservations/ReservationList'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privateRoute' element={<PrivateRoute/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/edition' element={<Edition/>} />
        <Route path='/reservation' element={<Reservation/>} />

        {/* partie Admin */}
        <Route path='/users' element={<Users/>} />
        <Route path='/reservations' element={<ReservationList/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
