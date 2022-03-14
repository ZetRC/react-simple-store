import React, { useState, useEffect } from 'react'
import axios from "axios"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import {useDispatch } from "react-redux"
import {addProduct} from "../actions"
import Loader from "../components/Loader"

function ProductsList() {

    const [ products, setProducts ] =useState([])
    const [ loading, setLoading] = useState(true)
    const url = "https://fakestoreapi.com/products"

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            setProducts(res.data)
            setLoading(false)
        })
        .catch(err=> console.log(err))
    },[])

    const dispatch = useDispatch()

    const ProductsListContent = () =>{
        return(
            <>
                {products.map(product=>(
                <div className="border border-gray bg-white px-2 py-4" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img className='h-[16rem] w-[8rem] object-contain mx-auto' src={product.image}></img>
                        <div className='px-6 py-3'>
                            <div className=" h-[1.5rem] text-lg overflow-hidden text-center w-full ">{product.title}</div>
                            <h6 className='text-center py-2 font-bold'>${product.price}</h6>
                        </div>
                    </Link>
                    <button
                        className='btn btn-green flex items-center w-full justify-center'
                        onClick={()=>{dispatch(addProduct(product))}}>
                            <FaShoppingCart className='mr-2'/>
                            Añadir al carrito
                    </button>
                </div>
            ))}
            </>
        )
    }
    
  return (
    <div className="custom-container">
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {loading ? <Loader/> : <ProductsListContent/> }
        </div>
    </div>
  )
}

export default ProductsList