import { useState } from "react";
import { adduser } from "../../services/services";
import "./signup.css"
import {useNavigate} from "react-router-dom"


const Signup=()=>{
    const [user,setUser]=useState({})
    var navigate=useNavigate()

    const change=(e,n)=>{
        var v={...user}
        v[n]=e.target.value
        setUser({...v})
    }
    
    const add= async(e)=>{
        var u=user
        u["dp"]="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
        const data=await adduser(u)
        if(data["status"]){
            navigate("/login")
        }
    }

    return (
        <>
            <div className="signwhole">
                <div className="signcard">
                    <div className="signnm">Blogger | <span className="sp">Signup</span></div>
                    <div className="signupputs">
                        <input placeholder="Name" className="signupp" name="name" onChange={(e)=>change(e,"name")}/>
                        <input placeholder="Username" className="signupp" name="username" onChange={(e)=>change(e,"username")}/>
                        <input placeholder="Password" type="password" className="signupp"name="password" onChange={(e)=>change(e,"password")}/>
                        <input placeholder="Email" className="signupp" name="email" onChange={(e)=>change(e,"email")}/>
                        <button className="signbut" onClick={add}>Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;