import React,{useState,useEffect} from 'react'
import {getallUsers} from "../../Service/voteApi"
import { Table,Avatar ,TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
  
const useStyle = makeStyles({
        table: {
            width: '80%',
            height:'50%',
            margin: '50px 100px 100px 140px',
            color:"white",
            position:"relative",
            top:"20%"
           
        },
        thead:{
            '& > *':{
                background: '#000000',
                color:'#FFFFFF',
                fontSize: '16px'
            }

        },
        trow:{
            '& > *':{
                fontSize: '16px',
                color:"white",
                fontWeight:"bold"
                
            }
        },
        img:{
            '& > *':{
                height:'50px',
                width:"50px",
                borderRadius:"50px",
                BoxShadow:"2px 2px 2px 2px white"
            }
        }
    })


    
    
 const ResultofVote = () => {
    let [candidate,setCandidate]=useState([])
    let [maxVote,setMaxVote]=useState(0)
    const classes = useStyle();
    useEffect(()=>{
        getUsers();
       
    },[])
  
    
    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setCandidate(response.data);
    }
  return (
      <div>
    <Table className={classes.table}>
    <TableHead className='shadow-lg shadow-white'>
        <TableRow className={classes.thead}>
            <TableCell>ID</TableCell> 
            <TableCell> Avatar </TableCell>
            <TableCell>Name</TableCell>

            <TableCell>Votes</TableCell>
           
        </TableRow>
    </TableHead>
    <TableBody>
    {
        candidate.map((data) => (
            <TableRow className={classes.trow}>
                <TableCell>{data.id}</TableCell>
                
                <TableCell><Avatar alt={data.name} src={data.logo} className={classes.img} /></TableCell>
            <TableCell>{data.name}</TableCell>   
             <TableCell>{data.votes}</TableCell>
             {(maxVote<data.votes) && setMaxVote(data.votes)} 
               
            </TableRow>
        ))
    }
    </TableBody>
</Table>
<div>
    {candidate.filter((item)=>item.votes===maxVote).map((item,index)=>{
        return(
            <div className='text-left left-[5rem] relative text-white bottom-[2rem]'>
                <h5 className='h-[2.5rem] w-[6rem] p-2  bg-black'>Manager</h5>
            <p className='relative left-4 font-medium'>{item.name}</p>
            </div>
        )
    })
    
    }
</div>
</div>
  )
}

export default ResultofVote