import logo from './logo.svg';
import './App.css';
import {Routes , Route , HashRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Registar/Registar';
import Login from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
import Footer from './Components/Data/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/login' element={<Login/>}/>


      </Routes>
      <Footer/>




      
    </div>
  );
}

export default App;
