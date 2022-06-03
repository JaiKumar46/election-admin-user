import React,{useState,useEffect} from 'react'
import {getallUsers,editUser} from "../Service/voteApi"
import {useNavigate} from "react-router-dom"

const Vote1 = () => {
    let [candidate,setCandidate]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
        getUsers();
       
    },[])
    
    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setCandidate(response.data);
    }
    const handleVote=async(data)=>{
        await editUser(data.id,{...data,votes:data.votes+1});
        console.log("voting");
        getUsers();
        navigate("/thanku")

    }
  return (
    <div className='flex h-[70vh] w-full '>
            <h1 className='absolute text-center text-white left-[38%]'>Vote Any Candidate </h1>
        {
            candidate.map((data,index)=>(
                
                <div key={index} className="h-[90%] w-[30%]  bg-transparent ml-7 mt-24 text-center text-white ">
                    <h1>{data.name}</h1>
                    <img src={data.logo} alt="" className='h-[15rem] w-[15rem] relative left-[5rem] rounded-xl hover:scale-105'/>
                    <h5 className=''>Vote:{data.votes}</h5>
                    <button className='bg-green-600 h-[2.5rem] w-[5rem] rounded-lg cursor-pointer ' onClick={()=>handleVote(data)}>vote</button>
                    {/* <button onClick={()=>{
                        data.votes++
                        // console.log({data.votes})
                        }}>Vote</button> */}
                  
                </div>
            ))
        }
    </div>)
}

export default Vote1