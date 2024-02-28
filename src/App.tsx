
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'

function App() {

  // Global states
  const isLoggedIn = useState<boolean>(false)


  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App