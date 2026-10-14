import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
        empName:"",
        empAddress:"",
        empSalary:"",
        empContactNumber:"",
        empDOB:"",
        empEmailId:"",
        empPassword:""
    })

    const{empName, empAddress, empSalary, empContactNumber, empDOB, empEmailId, empPassword} = employee;


    const onInputChange = (e)=>{
        setEmployee({...employee, [e.target.name]: e.target.value});
    }

    const onSubmit = async(e)=>{

        e.preventDefault();

        await axios.post("http://localhost:8080/employees/signup", employee)

        navigate(`/`)

    }

  return (
    <div>
        <form onSubmit={(e)=> onSubmit(e)}>

            <div>
                Name<input type='text' name='empName' value={empName} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Address<input type='text' name='empAddress' value={empAddress} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Salary<input type='number' name='empSalary' value={empSalary} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Contact Number<input type='number' name='empContactNumber' value={empContactNumber} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                DOB<input type='date' name='empDOB' value={empDOB} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Email<input type='email' name='empEmailId' value={empEmailId} onChange={(e)=> onInputChange(e)} />
            </div>

              <div>
                Password<input type='password' name='empPassword' value={empPassword} onChange={(e)=> onInputChange(e)} />
            </div>

            <button type='submit' className='btn btn-success'>SignUp</button>

            <Link className='btn btn-info' to={`/`}>SignIn</Link>

        </form>
    </div>
  )
}
