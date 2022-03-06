import "./login.css"
import {useRef,useEffect} from "react"
import { loginuser } from "../../services/services"
import {useNavigate} from "react-router-dom"

const Login=()=>{

    const username = useRef()
    const password = useRef()
    var navigate=useNavigate()

    useEffect(()=>{
       var v=eval(window.sessionStorage.getItem("login")||false)
       if(v){
            navigate("/")
        }
    },[])

    const login=async (e,n)=>{
        var u=username.current.value
        var p=password.current.value
        var res=await loginuser(u,p)
        if(res.status){
            window.sessionStorage.setItem("user",JSON.stringify(res.data))
            window.sessionStorage.setItem("login","true")
            navigate("/")
        }
    }
   

    return (
        <>
            <div className="logwhole">
                <div className="logcard">
                    <div className="lognm">Blogger | <span className="sp">Login</span></div>
                    <div className="loginputs">
                        <input placeholder="Username" className="loginp" ref={username}/>
                        <input placeholder="Password" type="password" className="loginp" ref={password}/>
                        <button className="logbut" onClick={login}>Login</button>
                        <div className="signtext">Not a blogger <a href="signup">Sign up</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;