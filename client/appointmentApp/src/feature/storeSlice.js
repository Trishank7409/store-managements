import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={
    id:nanoid(),
    name:"",
    email:"",
    password:"",
    isLoggedIn:false
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        addStore:(state,action)=>{
           
        },
        deleteStore:(state,action)=>{
           
        }
    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;