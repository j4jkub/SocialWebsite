// import {useNavigate, useParams} from 'react-router-dom';
import Banner from "../../components/banner"
import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './userProfilePage.css'
import user_profile_icon from '../../assets/icons/profile-default-svgrepo-com.svg'
import axios from "axios";

export default function UserProfilePage(){
    let {userId} = useParams();
    const [userProfile, setUserProfile] = useState({});
    const [user, setUser] = useState({}); 
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/user/${userId}/`)
        .then(response => {
            console.log("Fetched user:", response.data);
            console.log("Fetched user:", response.data.user);
            setUserProfile(response.data);
            setUser(response.data.user)
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
        
    }, [])

    return(
        <div>
            <Banner/>
            { userProfile &&
                <>
                    <div className="user-proffile">
                        <img className="user-profile-picture" src={userProfile.profile_picture} alt={user_profile_icon}></img>
                        <div className="user-profile-username">
                            {user.username}
                        </div>
                        <div className="user-prifile-bio">
                            bio: {userProfile.bio}
                        </div>
                        <div className="follow-button-container">
                            <button className="follow-button">+</button>
                            <div className="">12</div>
                        </div>
                    </div>
                    <div className="user-content">
                        <button className="user-content-button">posts</button>
                        <button className="user-content-button">comments</button>
                    </div>
                </>
            }
        </div>

    )
}