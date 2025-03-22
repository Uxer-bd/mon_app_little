import './App.css';
import Nav from './composants/Nav';
import Header from './composants/Header';
import Main from './composants/Main';
import Footer from './composants/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import Reservation from './composants/Reservation';

function App() {
  return (
    <div className='corps'>
      {/* <Nav/> */}
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/reserve' element={<Reservation/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
