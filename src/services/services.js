import axios from "axios";
import { adduserlink, loginuserlink } from "./urls";


export const adduser=async (user)=>{
   const res = await axios.post(adduserlink(),user)
   return res.data
}

export const loginuser=async (user,pass)=>{
   const res = await axios.post(loginuserlink(),{"username":user,"password":pass})
   return res.data
}