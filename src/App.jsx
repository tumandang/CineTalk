import React from 'react'
import Navbar from './Components/MyNavbar'
import MovieContent from './Components/MovieContent'
function App() {
  return (
    <div className='min-h-screen text-white overflow-x-hidden'>
      <Navbar></Navbar>
      <main>
        <MovieContent></MovieContent>
      </main>
    </div>
  )
}

export default App