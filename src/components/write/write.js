import { useState ,useEffect} from "react";
import Header from '../header/header';
import "./write.css"
import {getDownloadURL, getStorage,ref, uploadBytes} from "firebase/storage"
import firebase from "../../fibase"
import { addBlog } from "../../services/services";
import {useNavigate} from "react-router-dom"
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


function Write() {

  const [blog,setBlog]=useState({})
  const [file,setFile]=useState(null)
  const [user,setUser]=useState({})
  const [uploaded,setUploaded]=useState(false)
  const navigate=useNavigate()

  const storage=getStorage(firebase)

  useEffect(()=>{
      check()
      setUser(JSON.parse(window.sessionStorage.getItem("user")))
    },[])

    const check=()=>{
        var v=eval(window.sessionStorage.getItem("login")||false)
       if(!v){
            navigate("/login")
        }
    }

  const click=()=>{
    document.querySelector(".ink").click()
  }

  const upload=(e)=>{
      var f=e.target.files[0]
      var img=document.getElementById("cv")
      if(f){
      setFile(f)
      document.querySelector(".file").classList.add("selected")
      var reader=new FileReader();
      reader.addEventListener("load",(e)=>{
                img.src=e.target.result
                setUploaded(false)
      })
      reader.readAsDataURL(f)
   }
  }

  const change=(n,e)=>{
    var v={...blog}
    v[n]=e.target.value
    setBlog(v)
  }

  const uploadFile=async (name,file)=>{
      var r=ref(storage,"images/"+name)
      if(!uploaded){
        await uploadBytes(r,file)
        setUploaded(true)
      }
      var url=await getDownloadURL(r)
      return url
  }
//'bid', 'username', 'cover', 'title', 'content','date', 'topics', 'count', 'duration'

  const add=async ()=>{
    var d=blog["date"] || new Date().getTime()
    var v={...blog}
    v["date"]=d
    v["count"]=0
    setBlog(v)
    var url;
    if(file!=null){
       url=await uploadFile(v["date"]+file.name,file)
       v["cover"]=url
       setBlog(v)
       var res=await addBlog({...v,...user})
       console.log(res)
       if(res.status){
          alertify.notify('Successfully added', 'success', 3, ()=>{});
          window.history.replaceState({},"")
       }
    }
  }

  return (
    <>
      <Header></Header>
        <div className="wrbody">
         <div className="wrheading">New Blog</div>
          <div className="feild">
              <label htmlFor="title">Title</label>
              <div>
                <textarea id="title" className="wrinp" onChange={(e)=>change("title",e)}></textarea>
              </div>
          </div>
          <div className="feild">
              <label htmlFor="content">Description</label>
              <div>
                <textarea id="content" className="wrinp" onChange={(e)=>change("content",e)}></textarea>
              </div>
          </div>
           <div className="feild">
              <label htmlFor="topic">Topics<span className="tpsp">(use ',' to seperate)</span></label>
              <div>
                <input id="topic" className="wrinp" onChange={(e)=>change("topics",e)}></input>
              </div>
          </div>
          <div className="feild">
              <label htmlFor="duration">Duration<span className="tpsp">(in mins)</span></label>
              <div>
                <input id="duration" className="wrinp"  type="number" onChange={(e)=>change("duration",e)}></input>
              </div>
          </div>
           <div className="feild">
              <label htmlFor="duration">Cover</label>
              <div className="file">
                <div className="wrfinp" onClick={click}>
                    <div className="slc"> Select image</div> 
                     <img id="cv"/>
                  </div>
                <input id="duration" type="file" className="ink" onChange={upload}></input>
              </div>
          </div>
          <div className="bfeild">
            <button className="wradd" onClick={add}>Add</button>
          </div>
        </div>
    </>
  );
}

export default Write;
