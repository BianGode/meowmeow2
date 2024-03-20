import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'
import { signOutFun } from "../firebase"

export default function Sidebar(props) {

  // const context = useContext(UserContext)
  // const fun = context.fun
  // const email = context.email
  // const [user, setUser] = useOutletContext();
  return (
    <div className="Sidebar">
      <div className="sidebarTopWrap">
        <img src={Logo} className='logo' alt="Logo" />
        <h3 onClick={() => props.handleMenu()}>X</h3>
      </div>
      {
        props.user !== null ?
          <>
            <div className="sideLinks">
              <Link to="catdashboard">Cat Dashboard</Link>
              <Link to='createcat'>Create a Cat</Link>
            </div>
            <button onClick={() => signOutFun()}>Sign out!</button>
          </>
          : <div className="sideLinks">
            <Link to="catdashboard">Cat Dashboard</Link>
            <Link to='createcat'>Create a Cat</Link>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
          </div>
      }
    </div>
  )
}