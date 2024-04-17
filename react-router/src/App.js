import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';


function App() {

  const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          
          <Route path='products' element={<SharedProductLayout/>}>
            <Route index element={<Products />}></Route>
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          } 
          />
          
          <Route path='*' element={<Error />}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
