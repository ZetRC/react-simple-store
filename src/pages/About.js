import React from 'react'
import { Link } from "react-router-dom"

function About() {
  return (
    
    <div className='custom-container p-4'>
      <div className="flex justify-center items-center mt-24 flex-col lg:flex-row">
        <img className='w-full max-w-[700px] m-0 md:mr-12' src="/images/react-about-img.svg" alt="" />
        <div>
          <h1 className='text-2xl pt-4'>Este sitio fue creado usando: </h1>
            <ul className='list-disc pl-8 py-4'>
              <li className='py-2 text-xl'>React</li>
              <li className='py-2 text-xl'>Redux</li>
              <li className='py-2 text-xl'>Axios</li>
              <li className='py-2 text-xl'>Taiwind</li>
            </ul>
            <a className='text-mainGreen text-xl' href="https://github.com/ZetRC/react-simple-store">Ir al repositorio</a>
        </div>
      </div>
    </div>
  )
}

export default About