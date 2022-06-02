import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import imagemSair from "./sair.png";
import imagemPerfil from "./mulher.png";
import "./index.css"

const Feed = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        }
    },[])

    const clearToken = () => {
         localStorage.removeItem("token")
        navigate("/")
    }
    return (
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
           
            <h1 className="tituloFeed">Feed</h1>          
        </div>
       
    )
}

export default Feed