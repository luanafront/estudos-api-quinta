import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import imagemPerfil from "./mulher.png";
import axios from "axios";
import "./index.css"

const Feed = () => {
    const navigate = useNavigate()
    const [feedData, setFeedData] = useState(null)
    const [like, setLike] = useState()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        }else {
            axios.get("https://62913677665ea71fe142a512.mockapi.io/api/v1/profile/").then(
                (res) => {
                    let data = res.data 
                    setFeedData(data)
                }
            )
        }
    }, [])

    const clearToken = () => {
         localStorage.removeItem("token")
        navigate("/")
    }
    const likeContador = () => {
        let contador = 0
        setLike(contador+1)
    }

    return (
        feedData === null ? 
        <p>Loading</p> :
        <div className="feed">
            <div className="button">
                <a href="/profile/">
                    <img
                        className="imagemPerfil"
                        alt="perfil" 
                        src={imagemPerfil}/>
                </a>
                <button
                    className="buttonLogout"
                    onClick={clearToken}
                >
                Logout
                </button>
            </div>
            {feedData.map((profile, index)=>{
                return (
                    <div className="feedPerfil" key={index}>
                        <p className="name"> {profile.name}</p>
                        <img alt="" className="imagemPubli" src={profile.avatar}/>
                        <div className="buttonPubli" >
                            <buton 
                                className="buttonLike"
                                onClick={likeContador}>Like{like}</buton>
                            <buton className="buttonComment">Comment</buton>
                        </div>
                        
                    </div>
                )
            })}     
        </div>
       
    )
}

export default Feed