import React,{useState,useEffect,useRef} from 'react'
import {useNavigate} from "react-router-dom"

const Timer1 = () => {
    const [timer,setTimer]=useState(2)
    const id=useRef(null)
    let navigate=useNavigate();
    const clear = () => {
        window.clearInterval(id.current);
      };
      useEffect(() => {
        id.current = window.setInterval(() => {
          setTimer((time) => time - 1);
        }, 1000);
        return () => clear();

      }, []);
    
      useEffect(() => {
        if (timer === 0) {
          clear();
          navigate("/userlogin1")
        }
      }, [timer]);
  return (
    <div className="timer text-white  hidden">
      <div className='flex'> 
      <h1 className='relative right-[3rem]'>Time left :{timer}</h1>
      </div>
    </div>
  )
}

export default Timer1