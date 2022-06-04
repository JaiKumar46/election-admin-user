import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import user from "../../voteLib/db.json"

const UserLogin1 = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("");
    let [data,setData]=useState(user.user)

    let navigate=useNavigate()
   
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        try{
        let arr=data.filter((e)=>e.email===email && e.password===password)
        console.log(arr);
        if (arr.length>=1) {
            navigate("/userdashboard")
        }
        else{
            document.write("incorrct email/password")
        }
    }
    catch(error){
        console.log(error);
        // eslint-disable-next-line no-lone-blocks
        {<div> {error} </div>}
    }
}
  return (
      <div>
          <button className='bg-green-600 h-[3.5rem] p-1 w-[10rem] relative top-[2rem]  rounded-md hover:bg-white left-11 hover:border-4 hover:border-green-600 ahover text-center   text-[2rem]  font-bold decoration-transparent'>
              <Link to="/" className='text-center text-[2rem] ahover font-bold decoration-transparent'>Back</Link></button>
    <div className="form bg-black text-white h-1/2 w-1/2 shadow-2xl rounded-2xl
    shadow-amber-400 absolute top-40 left-[20rem]  ">
        <form className="flex flex-col align-middle justify-center leading-[3rem] relative left-[10rem] top-[5rem] " onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className='font-bold'>Email:</label>
            <input type="email" name="email"  className='h-[2rem] w-[15rem] p-2 text-black rounded-[5px] placeholder:p-1 relative left-6 top-2'
             placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password" className='font-bold'>Password:</label>
            <input type="password"  className='h-[2rem] w-[15rem] p-2 relative top-3 text-black rounded-sm placeholder:p-1'
             name="password" placeholder='enter password' value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          <button className='bg-green-600 h-[3.5rem] p-1 w-[25rem] relative top-[2rem]  rounded-md hover:bg-white hover:border-4 hover:border-green-600 ahover text-center   text-[2rem]  font-bold decoration-transparent '>Login</button>
        </form>
    </div>
    </div>
  )
}

export default UserLogin1