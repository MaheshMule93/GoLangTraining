import logo from './logo.svg';
import './App.css';
import FetchData from './FetchData';
import React from "react"
import GetUser from './GetUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}>
          <Route path='/allUsers' element={<FetchData/>} />
          <Route path="/getUser" element={<GetUser/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/updateUser" element={<UpdateUser/>} />
          <Route path="/deleteUser" element={<DeleteUser/>} />
        </Route>
      </Routes>
    </BrowserRouter>

        
        <div>
        <div>
          Get User by id
          
        </div>
        <div>
          Add User
        </div>
        </div>

    </div>
  );
}

export default App;
