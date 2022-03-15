import React from 'react'
import { Link } from "react-router-dom"

function NavDropdown({isOpen}) {
  return (
    <div className={isOpen ? "bg-lightgray text-mainGreen z-50 text-center border-t border-gray block md:hidden" : "hidden"}>
    <Link className='py-3 text-lg block' to="/">Producos</Link>
    <Link className='py-3 text-lg block' to="/cart">Carrito</Link>
    <Link className='py-3 text-lg block' to="/about">About</Link>
  </div>
  )
}

export default NavDropdown