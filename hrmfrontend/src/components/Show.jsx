import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Show = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{

        loadEmployees();

    }, [])


    const loadEmployees = async()=>{

        const result = await axios.get("http://localhost:8080/employees/findall")

        setEmployees(result.data)

        console.log(result.data)
    }



  return (
    <div>

        <Link className='btn btn-info' to={`/signup`}>Add Employee</Link>
        <table className='table table-shadow'>

            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Contact Number</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>

            </thead>

            <tbody>
                {
                    employees.map((employee)=>(
                        <tr>
                            <td>{employee.empId}</td>
                            <td>{employee.empName}</td>
                            <td>{employee.empAddress}</td>
                            <td>{employee.empSalary}</td>
                            <td>{employee.empContactNumber}</td>
                            <td>{employee.empDOB}</td>
                            <td>{employee.empEmailId}</td>
                            <td>{employee.empPassword}</td>

                            <td>
                                <button className='btn btn-danger'>Delete</button>

                                <button className='btn btn-info'>Update</button>

                            </td>
                         

                        </tr>
                    ))
                }
            </tbody>

        </table>
    </div>
  )
}
