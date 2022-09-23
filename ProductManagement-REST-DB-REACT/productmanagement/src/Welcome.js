import { Outlet, Link } from "react-router-dom";


const Welcome = () =>{
    return(
        <div >
           <header className="App-header">
        <strong>Welcome to GoLang Product Store...</strong>

        <nav className="App-Link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allProducts">Get Product List</Link>
          </li>
          <li>
            <Link to="/getProduct">Get Product by Id</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/updateProduct">Update Product</Link>
          </li>
          <li>
            <Link to="/deleteProduct">Delete Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        
        </header>
        </div>
    )
}

export default Welcome