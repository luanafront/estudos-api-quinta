import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Profile = () => {
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        }
    },[])
    const navigate = useNavigate("")
    const clearToken = () => {
        localStorage.removeItem("token")
       navigate("/")
   }
   const feed = () => {
      navigate("/feed/")
  }
    return (
        <div className="profile">
            <div className="buttonProfile">
                <button
                    className="buttonProfile__back"
                    variant="outlined"
                    onClick={feed}
                >
                Back
                </button>
                <button 
                    className="buttonProfile__logout"
                    variant="outlined"
                    onClick={clearToken}
                >
                Logout
                </button>
            </div>
            <h1 className="tituloProfile">Profile</h1>
        </div>
       
    )
}

export default Profile