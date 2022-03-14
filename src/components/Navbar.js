import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdShopTwo } from "react-icons/md"

function Navbar() {

  const cart = useSelector(state=> state.cartReducer)
  const cartLenght =  Object.keys(cart).length

  return (
    <nav className="h-[70px] px-6 border-b border-b-gray bg-white ">
        <div className="custom-container flex items-center justify-between py-0 h-full">
          <Link className="text-lg flex items-center" to="/">
              <MdShopTwo className='text-darkGreen mr-3 text-2xl'/>
              SimpleStore
            </Link>
          <div className="flex">
            <Link className='px-3 text-lg' to="/">Productos</Link>
            <Link className='px-3 text-lg flex' to="/cart">
              Carrito
              <div className='text-mainGreen ml-1'>( {cartLenght} )</div>  
            </Link>
            {/* <Link className='px-3' to="/about">About</Link> */}
          </div>
        </div>
    </nav>
  )
}

export default Navbar