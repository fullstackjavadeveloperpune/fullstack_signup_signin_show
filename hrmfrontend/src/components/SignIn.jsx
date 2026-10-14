import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
     
        empEmailId:"",
        empPassword:""
    })

    const{ empEmailId, empPassword} = employee;


    const onInputChange = (e)=>{
        setEmployee({...employee, [e.target.name]: e.target.value});
    }

    const onSubmit = async(e)=>{

        e.preventDefault();

        const result= await axios.post("http://localhost:8080/employees/signin", employee)

        if(result.data){
            navigate(`/show`)
        }else{
            alert("Oops Invalid Credentials please try again!!!!!!!")
            navigate(`/`)
        }

    }

  return (
    <div>
        <form onSubmit={(e)=> onSubmit(e)}>

           
              <div>
                Email<input type='email' name='empEmailId' value={empEmailId} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Password<input type='password' name='empPassword' value={empPassword} onChange={(e)=> onInputChange(e)} />
            </div>

            <button type='submit' className='btn btn-success'>SignIn</button>

            <Link className='btn btn-info' to={`/signup`}>Haven't Account SignUp</Link>

        </form>
    </div>
  )
}
