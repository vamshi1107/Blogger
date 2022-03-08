import axios from "axios";
import { adduserlink, loginuserlink ,getAddblogLink,getMyblogsLink} from "./urls";


export const adduser=async (user)=>{
   const res = await axios.post(adduserlink(),user)
   return res.data
}

export const loginuser=async (user,pass)=>{
   const res = await axios.post(loginuserlink(),{"username":user,"password":pass})
   return res.data
}

export const addBlog=async (data)=>{
   const res = await axios.post(getAddblogLink(),data)
   return res.data
}

export const getMyblogs=async (data)=>{
   const res = await axios.post(getMyblogsLink(),data)
   return res.data
}