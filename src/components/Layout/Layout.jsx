import "./Layout.css"

import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserNameContext } from "../../context/UserNameContext"

const Layout = () => {
const { removeUserName } = useContext(UserNameContext);
const navigate= useNavigate();

const logout = () => {
  removeUserName();
  navigate("/");
}

  return (
    <div>

        <button className="logout_btn" onClick={logout} >Log out</button>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout