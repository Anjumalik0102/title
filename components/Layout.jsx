import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
           <nav>
        <ul>
        
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>

      {/* <Outlet />  */}
        </>
    )
}

export default Layout