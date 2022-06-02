import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";

const Profile = () => {
    const [profileData, setProfileData] = useState(null)
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        }else {
            axios.get("https://62913677665ea71fe142a512.mockapi.io/api/v1/profile/1/").then(
                (res) => {
                    let data = res.data 
                    setProfileData(data)
                }
            )
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
        profileData === null ? 
        <p>Loading</p> : 
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
                <img className="imagem_perfil" alt="imagem" src={profileData.image_profile}/>
                <p>Email: {profileData.email}</p>
                <p>Nome: {profileData.first_name} {profileData.last_name}</p>
                <p>Github desse Projeto:
                        <a href="https://github.com/luanafront/estudos-api-quinta"> Clique AQUI</a>
                </p>
        </div>
       
    )
}

export default Profile