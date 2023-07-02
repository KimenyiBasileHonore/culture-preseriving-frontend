import { Routes,Route, useLocation } from 'react-router-dom'; 
import About from './components/pages/About';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import Homepage from './components/pages/Homepage';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import Navigation from './components/Navigation';
import './App.css';



function App() {

  const location = useLocation();
  const hideNavigationAndFooter = location.pathname === '/Dashboard'
 
  

  return (
    <div>
      
      {!hideNavigationAndFooter && <Navigation />}
      <Routes>
      <Route path ="home" element ={<Homepage/>}/>
      <Route path ="/" element ={<Homepage/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Signup" element ={<Signup/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path ="/Footer" element ={<Footer/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/Dashboard" element ={<Dashboard/>}/>
      
      
      
      
      </Routes>
      {!hideNavigationAndFooter && <Footer />}
       
    </div>
  );
}

export default App;


