import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUser, getallUsers } from '../../Service/serviceApi';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    password:"",
}

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone, password} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       navigate('/admindashboard');
    }

    return (
        <Container maxWidth="sm" className='text-white'>
            <Box my={5}>
            <Typography variant="h5" align="center">Update User Details</Typography>
            <FormGroup className='text-white'>
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
                    <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update User</Button>
                    <Button onClick={()=> navigate("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditUser;