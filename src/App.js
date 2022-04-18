import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Header></Header>  
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
