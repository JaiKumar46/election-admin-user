import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"


const UserLogin = () => {
    let navigate=useNavigate()
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
        {
          username: "raj",
          password: "raj124"
        },
        {
          username: "akashsingh",
          password: "akash526"
        },{
            username: "jk",
            password: "jk461999"
        }

      ];
    
      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
        // navigate("/src/Components/Admin/Login/AdminLogin.jsx")
        navigate("/userdashboard")
      };
    
      // Generate JSX code for error message
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );
        const renderForm = (
            <div className="form bg-black text-white h-1/2 w-1/2 shadow-2xl rounded-2xl
            shadow-amber-400 absolute top-40 left-[20rem]  ">
              <form onSubmit={handleSubmit} className="flex flex-col align-middle justify-center leading-[3rem] relative left-[10rem] top-[5rem] ">
                <div className="input-container">
                  <label className='font-bold  '>Username: </label>
                  <input type="text" name="uname" required placeholder='Enter Admin Name'  className='h-[2rem] w-[15rem] p-2 text-black rounded-sm placeholder:p-1' />
                  {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                  <label className='font-bold ' >Password: </label>
                  <input type="password" name="pass" required className='h-[2rem] w-[15rem] text-black relative left-[0.5rem] p-2 rounded-sm' placeholder='Enter Password' />
                  {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                  <input type="submit" className='bg-green-600 h-[3.5rem] p-1 w-[25rem] relative top-[2rem]  rounded-md hover:bg-white hover:border-4 hover:border-green-600 ahover text-center   text-[2rem]  font-bold decoration-transparent ' />
                </div>
              </form>
            </div>
          );
          
    
      
    
  return (
    <div className="app">
      <button className='text-white  h-[3rem] w-[7rem] bg-green-600 rounded-md relative top-[5rem] left-[5rem] hover:border-4 hover:bg-white hover:border-green-600'>
        <Link to="/" className='text-center text-[1.5rem] ahover font-bold decoration-transparent'> Back</Link>
       </button>
    <div className="login-form">
      <div className="title text-[3rem] text-white absolute top-[10rem] left-[37rem] z-40 ">User Login</div>
      {isSubmitted ? <div className='text-white'>User is successfully logged in</div> : renderForm}
    </div>
  </div>
  )
}

export default UserLogin