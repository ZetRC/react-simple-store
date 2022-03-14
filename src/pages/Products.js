import React,{useState, useEffect} from 'react'
import axios from "axios"
import { useParams , useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addProduct } from "../actions/"
import {FaShoppingCart} from "react-icons/fa" 
import Loader from '../components/Loader'

function Products() {

    const {id} = useParams()

    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
          setProductData(res.data)
          setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const dispatchToCart = (()=>{
      dispatch(addProduct(productData))
      navigate("/cart")
    });


    const ProductContent = () =>{
      return(
        <>
          <img className="w-[400px] mx-[6.5rem]" src={productData.image} alt=""/>
          <div className='h-fit'>
              <h1 className='py-2 text-2xl d-flex opacity-70'>{productData.category}</h1>
              <h1 className='py-2 text-3xl'>{productData.title}</h1>
              <h3 className='py-2 text-3xl font-bold'>${productData.price}</h3>
              <h3 className='py-2 '>{productData.description}</h3>
              <div className="mt-4">
                <button className='btn btn-green mr-2 flex items-center' onClick={dispatchToCart}>
                  <FaShoppingCart className='mr-2'/>
                  Add to cart
                </button>
              </div>
          </div>
        </>
      )
  }
    

  return (
    <div className="custom-container">
      <div className='flex flex-col lg:flex-row items-center justify-between custom-box rounded-2xl my-12 py-20 px-6'>
          {loading ? <Loader/> : <ProductContent/> }
      </div>
    </div>
  )
}

export default Products