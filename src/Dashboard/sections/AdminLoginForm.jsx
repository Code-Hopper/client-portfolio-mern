import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const AdminLoginForm = () => {

    let [showPassword, setShowPassword] = useState(false)

    let [data, setData] = useState({ email: '', password: "" })

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    const handelChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setData((prevData) => {
            return ({ ...prevData, [name]: value })
        })
    }

    return (
        <>
            <div id='admin-login-section' className='container-fluid d-flex justify-content-center align-items-center'>
                <div className=''>
                    <div className='admin-login-form bg-light d-inline-block shadow-lg'>
                        <span className='fw-bolder fs-3 bg-warning d-block text-center p-2'>Admin Login Form</span>
                        <div className='p-5'>
                            <form onSubmit={handelSubmit}>
                                <div className='d-flex gap-3 flex-column'>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder='' className='form-control' onChange={handelChange} name='email' value={data.value} />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor="">Password</label>
                                        <div className='d-flex gap-2'>
                                            <input type={showPassword ? "text" : "password"} placeholder='' className='form-control' onChange={handelChange} name='password' value={data.password} />
                                            <button className='btn btn-dark' type='button' onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center gap-4'>
                                        <button className='btn btn-success' type='submit'>Login</button>
                                        <button className='btn btn-danger' type='reset'>Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLoginForm
