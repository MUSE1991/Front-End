import React, {useState} from "react";
import './Login.css'
import logo from './img/logo.png';
import user from './img/user.png'
import pwimg from './img/pw.png'

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    function onIdChangeHandler(e) {
        setId(e.target.value);
    }
    function onPwChangeHandler(e) {
        setPw(e.target.value);
    }

    function handleClick() {
        alert(`login clicked!\nid: ${id}\npw: ${pw}`);
    }
    return(
        <div className="body">
            <img className='logo' src={logo} alt="logo"></img>
            <div className="container">
                <div className="id">
                    <img className='userimg' src={user} alt='user'></img>
                    <form><input onChange={onIdChangeHandler} id="inputId" type="text"></input></form>
                </div>
                <div className="pw">
                    <img className='pwimg' src={pwimg} alt='pw'></img>
                    <form><input onChange={onPwChangeHandler} id="inputPw" type="text"></input></form>
                </div>
                <div onClick={handleClick} className="login">
                    Log in
                </div>
            </div>
            
        </div>
    );
}

export default Login;