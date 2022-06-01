import React from 'react'
import menu from '../../icons/menu.svg'
import shoppingCart from '../../icons/shoppingCart.svg'

export const Header = () => {
  return (
    <div className='flex items-center sticky bg-slate-600 h-14'>
        <img src={menu} alt={'menu'} className='p-2 h-12 w-12'/>
        <h1 className='text-2xl text-white font-semibold w-full text-center'>Tienda</h1>
        <img src={shoppingCart} alt={'shopping-cart'} className='p-2 h-12 w-12'/>
    </div>
  )
}
