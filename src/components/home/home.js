import { useState,useEffect } from "react";
import Header from '../header/header';
import {useNavigate} from "react-router-dom"


function Home() {

  const navigate=useNavigate()
  
   useEffect(()=>{
       var v=eval(window.sessionStorage.getItem("login")||false)
       if(!v){
            navigate("/login")
        }
    },[])

  return (
    <>
      <Header></Header>
      <div>
        
      </div>
    </>
  );
}

export default Home;
 