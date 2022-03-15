import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {removeProduct} from "../actions/"

function Cart() {
  const cartContent = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  
  return (
    <div className='custom-container'>
      <div className="pt-12 pb-20 text-3xl font-bold ">Carrito de compras</div>
      <div className="custom-box ">
        <div className='pb-4 hidden md:flex'>
          <div className='text-lg  opacity-80 w-6/12'>Producto</div>
          <div className='text-lg  opacity-80 w-2/12'>Cantidad</div>
          <div className='text-lg  opacity-80 w-2/12'>Precio</div>
        </div>
        {cartContent.map(cartItem=>(
          <div className="py-8 flex items-center justify-between  md:flex-row flex-col" key={cartItem.id}>
            <div className='flex items-center w-full md:w-6/12'>
              <img className='w-[5rem] mr-5' src={cartItem.image}></img>
              <div className=''>
                <div className="font-bold text-xl">{cartItem.title}</div>
                <div className="opacity-70">{cartItem.category}</div>
              </div>
            </div>
            <div class="flex items-center w-full md:w-6/12 py-4 md:py-0">
              <div className="w-6/12">
                <input className='border border-gray w-[5rem] p-2 rounded' type="number" value="1" min="1"/>
              </div>
              <div className="w-6/12">
                <div className='text-xl font-bold'>${cartItem.price}</div>
              </div>
              <div className="w-6/12">
                <div className="btn btn-outline w-fit" onClick={()=>dispatch(removeProduct(cartItem))}>Remover</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart