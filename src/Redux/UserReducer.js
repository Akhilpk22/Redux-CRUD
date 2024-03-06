import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../compoent/Data";
 

const UserSlice=createSlice({
    name:"Users",
    initialState:UserList,
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            // console.log(action);
            const {id,name,email}=action.payload;
            const UpUser= state.find(user=>user.id==id);
            if(UpUser){
                UpUser.name=name;
                UpUser.email=email;
            }

        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const UpUser= state.find(user=>user.id==id);
            if(UpUser){
                return state.filter(f=>f.id!==id)
                
            }

        }
        
    }
})
export const {addUser,updateUser,deleteUser}=UserSlice.actions
export default UserSlice.reducer