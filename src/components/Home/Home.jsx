import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className=' bg-black h-1/2 w-1/2  rounded-2xl absolute top-40 left-[20rem] flex align-middle justify-evenly shadow-xl shadow-amber-400'>
        <h1 className='text-white text-center relative top-[3rem] left-[10rem]'>Choose Any One</h1>
        <button className='bg-green-600 h-[3.5rem] p-1 w-[10rem] relative top-[10rem] right-[13rem] rounded-md hover:bg-white hover:border-4 hover:border-green-600 '> <Link to="/adminlogin" className='text-center   text-[2rem]  font-bold decoration-transparent ahover '>Admin</Link> </button>
        <button className='bg-green-600 h-[3.5rem] p-1 w-[10rem] relative top-[10rem] rounded-md right-[7rem] hover:bg-white hover:border-4 hover:border-green-600 '><Link to="/userlogin1" className='text-center text-[2rem] ahover font-bold decoration-transparent'>User</Link></button>
    </div>
  )
}

export default Home