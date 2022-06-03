import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../Service/serviceApi';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    password:"",
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone,password} = user;

    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
  
    navigate("/all")
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography className='text-white' variant="h5" align="center">Add User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel className='text-white'>Name</InputLabel>
                    <Input className='text-white' onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel className='text-white'>User Name</InputLabel>
                    <Input className='text-white' onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel className='text-white'>Email address</InputLabel>
                    <Input className='text-white' onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel className='text-white'>Password</InputLabel>
                    <Input className='text-white' onChange={(e) => onValueChange(e)} name="password" value={password} />
                </FormControl>
                <FormControl>
                    <InputLabel className='text-white'>Phone Number</InputLabel>
                    <Input className='text-white' onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add User</Button>
                    <Button onClick={()=> navigate("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;