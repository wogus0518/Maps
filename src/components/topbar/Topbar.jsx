import "./topbar.css"
import firebase from "../../firebaseInit";
import { useHistory, NavLink } from "react-router-dom";

export default function Topbar({isLoggedIn}){
    const history = useHistory();
    const onLogOutClick = () => {
        firebase.auth().signOut();
        history.push("/");
      };
    return(
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <NavLink to = "/" className="topbarLink">
                    <span className='logo'>FlosMap</span>
                </NavLink>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    {
                        isLoggedIn ? (
                            <>
                                <span className="topbarLink" onClick={onLogOutClick}>Log Out</span>
                                <NavLink to = "/selectYoutuber"  className="topbarLink">
                                    <span className="topbarLink" >Register</span>
                                </NavLink>
                            </>
                        ) : (
                                <>
                                    <NavLink to = "/login" className="topbarLink">
                                        <span className="topbarLink" >Sign IN</span>
                                    </NavLink>
                                    <NavLink to = "/register" className="topbarLink">
                                        <span className="topbarLink" >Sign UP</span>
                                    </NavLink>
                                </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}