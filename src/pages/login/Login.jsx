import "./login.css";
import React, {useState} from "react"
import { useHistory, NavLink } from "react-router-dom";
import firebase from "../../firebaseInit";
const authService = firebase.auth();

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        }
    };   

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            data = authService.signInWithEmailAndPassword(email, password);
            history.push("/")
            console.log(data);
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
                        <button className="loginButton">Log In</button>
                        <NavLink to = "/register">
                            <button className="loginRegisterButton">
                                Create a New Account
                            </button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}
