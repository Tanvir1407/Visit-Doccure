import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <Header></Header>
      <Features></Features>
      <Routes>
        <Route path="/"></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
