import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";

import Login from "./components/Login.jsx";
import Signup from './components/Signup.jsx'
import Home from "./components/Home.jsx";
import Protected from "./components/Protected.jsx";
import Layout from "./components/Layout.jsx";
import Location from "./components/Location.jsx";

const Routescus = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Location title='Home'><Layout /> </Location>} />
                <Route  path="home" element={<Protected title=''><Location> <Home /></Location> </Protected>} />
                <Route path="login" element={<Location title='Login'><Login /></Location>} />
                <Route path="signup" element={<Location title='Signup'><Signup  /></Location>} />
            </Routes>

        </BrowserRouter>
    )

}

export default Routescus


