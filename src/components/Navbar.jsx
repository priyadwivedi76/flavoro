import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1>{new Date().toUTCString().slice(0,16)}</h1>
    </div>
  )
}

export default Navbar