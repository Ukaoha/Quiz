import './App.css';
import {Routes , Route , } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Registar/Registar';
import Login from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
 


function App() {
  return (
    // <HashRouter>


    <div className="App">
      <Navbar/>
      < Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/login' element={<Login/>}/>


      </Routes>





      
    </div>


  );
}

export default App;
