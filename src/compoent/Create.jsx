import React, { useState } from 'react'
import { addUser } from '../Redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")

  const dispatch= useDispatch();
  const navigate=useNavigate()
  const users = useSelector((state) => state.users);



  const handleSubmit=(e)=>{
      e.preventDefault();
      if(name&&email){
        dispatch(addUser({id: users[users.length - 1].id+1,name,email}))
        navigate('/')

      }else{
        alert("please fill the  form")
      }


      
  }
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center w-100 vh-100">
        <div className='w-50 border  text-white p-5'>
          <div className='d-flex justify-content-center align-items-center '>
                  <h5>ADD NEW USER</h5>
          </div>
          <form onSubmit={handleSubmit}>
              <div className='mb-3'>
              <label htmlFor="name">Name:</label>
              <input onChange={e=>{setName(e.target.value)}} placeholder='enter your name ' type="text" name='name ' className='form-control ' />
              </div>

              <div>
              <label htmlFor="email">Email:</label>
              <input  onChange={e=>{setEmail(e.target.value)}} placeholder='enter your email' type="email" name='email ' className='form-control ' />
              </div>

              <div className='d-flex justify-content-lg-end mt-3'>
                <button className='btn btn-info'> submit</button>
              </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Create