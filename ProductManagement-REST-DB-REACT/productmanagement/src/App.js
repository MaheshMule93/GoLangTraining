import logo from './logo.svg';
import './App.css';
import FetchData from './FetchData';
import React from "react"
import GetUser from './GetProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import AddUser from './AddProduct';
import UpdateUser from './UpdateProduct';
import DeleteUser from './DeleteProduct';
import GetProduct from './GetProduct';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}>
          <Route path='/allProducts' element={<FetchData/>} />
          <Route path="/getProduct" element={<GetProduct/>} />
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path="/updateProduct" element={<UpdateProduct/>} />
          <Route path="/deleteProduct" element={<DeleteProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
