import React from 'react'
import Lupa from '../assets/zoom.png';
import Drink from '../assets/drink.png';

const Lista = () => {
  return (
    <>
    <div className=' bg-[#FF0000] flex flex-col justify-center items-center gap-10'>
        <header className='text-white flex flex-col gap-9 w-[95%] '>
            <div className=' flex items-center w-[100%] justify-center mt-2'>
               <div className='border rounded-2xl flex  w-[60%] gap-4'>
               <img className='w-[20px]' src={Lupa} alt="" />
               <input className='outline-none focus:outline-none focus:ring-0 focus:shadow' type="search" name="" id="" />
               </div>
            </div>
            <div>
            <h1 className='font-bold text-4xl'>Olá, bem vindo</h1>
            <p className='text-xs font-light'>O que temos para hoje? Escohla aqui seu pedido!</p>
            </div>
        </header>
        <main className='bg-amber-50 w-[100%] rounded-tl-[50px] rounded-tr-[50px]' >
       
                <ul className='font-semibold flex justify-around mt-9'>
                    <li className='border-b-2 border-red-500 text-red-600' >Bebidas</li>
                    <li>Lanches</li>
                    <li>Combos</li>
                </ul>

                <div className='mt-10 w-[100%] flex flex-row justify-around' >
                    <div className='flex flex-col  rounded-[20%] justify-center items-center shadow-md w-[32%]'>
                        <img className='h-[7em]' src={Drink} alt="" />
                        <h3 className='font-poppins text-[10px]'>Refrigerante</h3>
                        <p className='text-[7px]'>Saber cola</p>
                         <p className='text-[8px] mr-12'>$ 01.00</p>
                    </div>
                    <div className='flex flex-col  rounded-[20%] justify-center items-center shadow-md w-[32%]'>
                        <img className='h-[7em]' src={Drink} alt="" />
                        <h3 className='font-poppins text-[10px]'>Refrigerante</h3>
                        <p className='text-[7px]'>Saber cola</p>
                         <p className='text-[8px] mr-12'>$ 01.00</p>
                    </div>
                    <div className='flex flex-col  rounded-[20%] justify-center items-center shadow-md w-[32%]'>
                        <img className='h-[7em]' src={Drink} alt="" />
                        <h3 className='font-poppins text-[10px]'>Refrigerante</h3>
                        <p className='text-[7px]'>Saber cola</p>
                         <p className='text-[8px] mr-12'>$ 01.00</p>
                    </div>
                </div>
        </main>
    </div>
    </>
  )
}

export default Lista