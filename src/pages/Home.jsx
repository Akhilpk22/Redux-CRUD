import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/UserReducer";

function Home() {
  const users = useSelector((state) => state.users);
  
  const dispatch= useDispatch()

   const handleDelete=(id)=>{
      dispatch(deleteUser({id: id}))
   }

  return (
    <>
      <div className="container">
        <h2 className="d-flex text-white m-4 justify-content-center align-items-center">
          CRUD APP WITH JSON SERVER
        </h2>
        <Link style={{textDecoration:"none"}} to={'/create'} className="btn btn-success my-3">Create +</Link>
        <table className="table table-bordered ">
          <thead >
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return(
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary  ms-2 ">Edit</Link>
                  <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
