import React from 'react'
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="custom-container">
      <h1 className="text-3xl">404</h1>
      <div>La página no fué encontrada</div>
      <Link className=' text-mainGreen' to="/">Volver a home</Link>
    </div>
  )
}

export default NotFound