import { Routes,Route } from 'react-router-dom'; 
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home';


function App() {
  return (
    <div>
     
      <Routes>
      <Route path ="home" element ={<Home/>}/>
      <Route path ="/" element ={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;


