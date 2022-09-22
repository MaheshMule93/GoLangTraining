import { Outlet, Link } from "react-router-dom";

const Welcome = () =>{
    return(
        <div>
           <header className="App-header">
        Welcome to GoLang Integration...

        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allUsers">Get All Users</Link>
          </li>
          <li>
            <Link to="/getUser">Get User by Id</Link>
          </li>
          <li>
            <Link to="/addUser">Add User</Link>
          </li>
          <li>
            <Link to="/updateUser">Update User</Link>
          </li>
          <li>
            <Link to="/deleteUser">Delete User</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        
        </header>
        </div>
    )
}

export default Welcome