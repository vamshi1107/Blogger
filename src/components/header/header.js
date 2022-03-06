import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css"

const Header=(props)=>{

    const navigate =useNavigate()

    const logout=()=>{
        window.sessionStorage.clear()
        navigate("/login")
    }

    return (
        <>
            <header>
                <div className="logocon">
                   <a href="/"> <div className='logo'>Blogger</div></a>
                    <div id="greet">Greetings!</div>
                </div>
                <div className="menu">
                    <a href='write'><div className="menuitem m1">Write</div></a>
                    <a><div className="menuitem m2">Your articles</div></a>
                    <div className="menuitem m3" onClick={logout}>Logout</div>
                </div>
            </header>
        </>
    )
}

export default Header;