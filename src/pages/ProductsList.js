import React, { useState, useEffect } from 'react'
import axios from "axios"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import {useDispatch } from "react-redux"
import {addProduct} from "../actions"
import Loader from "../components/Loader"

function ProductsList() {

    const [ products, setProducts ] =useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect(()=>{
        axios.get(url)
        .then(res => setProducts(res.data))
        .catch(err=> console.log(err))
    },[url])
    
    const dispatch = useDispatch()

  return (
    <div className="custom-container">
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map(product=>(
                <Link to={`/products/${product.id}`} className='border border-gray bg-white' key={product.id}>
                    <img className='h-[16rem] w-[8rem] object-contain mx-auto' src={product.image}></img>
                    <div className='px-6 py-3'>
                        <div className=" h-[1.5rem] text-lg overflow-hidden text-center w-full ">{product.title}</div>
                        <h6 className='text-center py-2 font-bold'>${product.price}</h6>
                        <button
                        className='btn btn-green flex items-center w-full justify-center'
                        onClick={()=>{dispatch(addProduct(product))}}>
                            <FaShoppingCart className='mr-2'/>
                            Añadir al carrito
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductsList