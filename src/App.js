
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'

import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Customer from './Component/Customer';
import Prieview from './Component/Prieview'
function App() {
  return (
    <BrowserRouter>
       
    <Navbar/>
      

    <Routes>
     <Route exact path='/' element={<Banner/>}/>
     <Route exact path='/Customer' element={<Customer/>}/>
     <Route exact path='/Customer/Prieview' element={<Prieview/>}/>
     <Route exact path='/Customer/Prieview/Customer' element={<Customer/>}/>
     
      </Routes>
    
  
</BrowserRouter>
      );
}

export default App;
