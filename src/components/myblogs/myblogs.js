import Header from "../header/header";
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { getMyblogs } from "../../services/services";
import "./myblogs.css"

const Myblogs=()=>{
    const [blogs,setBlogs]=useState([])
    const [user,setUser]=useState({})


    const navigate=useNavigate()

    useEffect(() => {
        check()
        load()
    }, [])

    const load=async()=>{
       var res=await getMyblogs(JSON.parse(window.sessionStorage.getItem("user")))
       if(res.status){
           setBlogs(res.data)
       }
    }

    const check=()=>{
        var v=eval(window.sessionStorage.getItem("login")||false)
       if(!v){
            navigate("/login")
        }
    }
    
    return(
        <>
            <Header></Header>
            <div className="mwhole">
                <div className="mhead">My blogs</div>
                <div className="blogscon">
                    {
                        blogs.map(ele=>{
                            return (
                                <div className="mblog">
                                    <div className="msub">
                                        <div className="bimg">
                                            <img src={ele.cover}></img>    
                                        </div>
                                        <div className="mdesc">
                                            <div className="mbtitle">{ele.title}</div>
                                            <div className="mbcontent">
                                                {ele.content}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>Delete</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Myblogs;