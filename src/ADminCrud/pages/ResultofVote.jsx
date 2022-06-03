import React,{useState,useEffect} from 'react'
import {getallUsers} from "../../Service/voteApi"
import { Table,Avatar ,TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
  const useStyle = makeStyles({
        table: {
            width: '80%',
            margin: '50px 100px 100px 140px',
            color:"white",
            // backgroundColor:"transparent"
            // backgroundImage:URL("https://images.unsplash.com/photo-1598802777393-751e5387ecd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dm90aW5nJTIwcG9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
            // backgroundRepeat:"no-repeat",
            // backgroundSize:"cover",
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
                color:"black",
                fontWeight:"bold"
                
            }
        },
        img:{
            '& > *':{
                height:'30px',
                width:"30px",
                borderRadius:"30px",
            }
        }
    })
    
    
    const ResultofVote = () => {
    let [candidate,setCandidate]=useState([])
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
    <Table className={classes.table}>
    <TableHead className='shadow-lg shadow-white'>
        <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell> Avatar </TableCell>
            <TableCell>Votes</TableCell>
           
        </TableRow>
    </TableHead>
    <TableBody>
    {
        candidate.map((data) => (
            <TableRow className={classes.trow}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell><Avatar alt={data.name} src={data.logo} className={classes.img} /></TableCell>
                <TableCell>{data.votes}</TableCell>
              
               
            </TableRow>
        ))
    }
    </TableBody>
</Table>
  )
}

export default ResultofVote