import "./register.css";
import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseInit";
const authService = firebase.auth();

export default function Register() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgin, setPasswordAgin] = useState("");
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        } else if (name === "passwordAgain") {
            setPasswordAgin(value)
        }
    };    
    
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          let data;
          if(password === passwordAgin){
              data = await authService.createUserWithEmailAndPassword(
                email,
                password
              );
            history.push("/")
            console.log(data);
          } else {
              setError("비밀번호가 일치하지 않습니다.")
          }
        } catch (error) {
          setError(error.message);
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FlosMap</h3>
                    <span className="loginDesc">
                    유튜버의 발자취를 따라 미식여행
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={onSubmit} className="loginBox">
                        <input 
                            placeholder="Username" 
                            className="loginInput" 
                            name="name"
                            type="text"
                            value={name}
                            onChange={onChange}
                            required/>

                        <input 
                            placeholder="Email" 
                            className="loginInput" 
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChange}
                            required/>

                        <input 
                            placeholder="Password" 
                            className="loginInput" 
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChange}
                            required/>

                        <input 
                            placeholder="Password Again" 
                            className="loginInput" 
                            name="passwordAgain"
                            type="password"
                            value={passwordAgin}
                            onChange={onChange}
                            required/>

                        <button  className="loginButton">Sign Up</button>
                        {error}
                        {/* <button className="loginRegisterButton">
                            Log into Account
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}
