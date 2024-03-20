
import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth, signOutFun } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './styles/global.css'
import './styles/header.css'
import Sidebar from './components/Sidebar';
// import images and svg
import Hamburger from './assets/hamburger.svg';
import Cat from './assets/cat.png';
import Logo from './assets/logo.png'
import { doc } from 'firebase/firestore';

function App() {

  // Global states
  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    });
  }, auth.currentUser)

  // function to handle hamburger menu
  function handleMenu() {
    const sideBarTarget = document.querySelector('.Sidebar')
    const backdrop = document.querySelector('.backdrop')

    sideBarTarget?.classList.toggle('on')
    backdrop?.classList.toggle('on')
  }

  //after every redirect check if sidebar is open if not close
  let location = useLocation();

  useEffect(() => {
    if(document.querySelector('.Sidebar')?.classList.contains('on')) {
      handleMenu()
    }
  }, [location])

  return (
    <>
      <header className='header'>
        {user !== null ?
          <>
            <Link to="cats">Cats</Link>
            <Link to='createcat'>Create a Cat</Link>
          </>
          : <>
            <Link to="login">Login</Link>
            <Link to="register">register</Link>
          </>
        }
      </header>
      {/* make a second header for mobile first */}
      <header className='mobHeader'>
        <img src={Hamburger} onClick={() => handleMenu()} alt="hamburger" />
        <img src={Logo} className='logo' alt="Logo" />
        <img src={Cat} alt="Profile" onClick={() => console.log(user)} />
      </header>
      <Sidebar user={user} setUser={setUser} handleMenu={() => handleMenu()} />
      <Outlet context={[user, setUser]} />
      <div className='backdrop'></div>
    </>
  )
}

export default App