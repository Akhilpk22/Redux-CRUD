import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux/UserReducer';

function Update() {
  const {id}=useParams();

  const users = useSelector((state) => state.users);


  const existingUser= users.filter(f=>f.id==id);
  const {name,email}=existingUser[0];

  const [upname,setName]=useState(name);
  const [upemail,setEmail]=useState(email); 

  const dispatch= useDispatch();
const navigate= useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser({
      id:id,
      name:upname,
      email:upemail,
    }))
    navigate('/')

  }
  return (
    <>
        <div className=" d-flex justify-content-center align-items-center w-100 vh-100">
        <div className='w-50 border bg-secondary text-white p-5'>
          <div className='d-flex justify-content-center align-items-center '>
                  <h5 className='fw-bolder'>UPDATE USER</h5>
          </div>
          <form onSubmit={handleUpdate}>
              <div className='mb-3'>
              <label htmlFor="name">Name:</label>
              <input placeholder='Enter your name ' onChange={e=>setName(e.target.value)} value={upname} type="text" name='name ' className='form-control ' />
              </div>

              <div>
              <label htmlFor="email">Email:</label>
              <input   placeholder='Enter your email' onChange={e=>setEmail(e.target.value)} value={upemail} type="email" name='email ' className='form-control ' />
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

export default Update