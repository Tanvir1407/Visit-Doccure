import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Signup from './components/Signup/Signup';
import RequareAuth from './components/RequareAuth/RequareAuth';
import ResetPassword from './components/ResetPassword/ResetPassword';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkout"
          element={
            <RequareAuth>
              <Checkout></Checkout>
            </RequareAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
