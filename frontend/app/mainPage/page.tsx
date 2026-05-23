
"use client";
import "@/app/style/style.css"
import Image from 'next/image'
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

import upvote_icon from "@/public/upvote-svgrepo-com.svg"
import f_upvote_icon from "@/public/upvote-svgrepo-com(1).svg"
import comment_icon from "@/public/comment-svgrepo-com.svg"
import share_icon from "@/public/share-nodes-svgrepo-com.svg"
import search_icon  from "@/public/search-alt-svgrepo-com.svg"
import close_icon from "@/public/close-svgrepo-com.svg"
import deault_profile from "@/public/profile-default-svgrepo-com.svg"

import { useState } from "react";

export default function MainPage(){
    return(
        <>
            <Header/>
            <Board/>
            {/* <Footer/> */}
        </>
    )
}

function Board(){
    return(
    <>
        <div id="Board">
            <SearchBar/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    </>
    )
}

function Post(){
    const [postLiked, setPostLiked] = useState(false)

    function toggleLike(){
        setPostLiked(!postLiked)
    }

    function searchTag(){
        
    }

    return(
        <div className="post">
            <h1>Post Title</h1>
            <div className="postUserLabel">
                <Image src={deault_profile} alt="upvote" width={24} height={24}/>
                <a href={""} className="postContent ">
                    u/ Jjoj
                </a>
            </div>

            <div className="postContent">
                test sewxxx
            </div>
            <img src={"file.svg"}></img>
            <div className="postTagList">
                <button className="postTag noselect" onClick={searchTag}>python</button>
                <button className="postTag noselect" onClick={searchTag}>c#</button>
                <button className="postTag noselect" onClick={searchTag}>c++</button>
                <button className="postTag noselect" onClick={searchTag}>gamedev</button>
                <button className="postTag noselect" onClick={searchTag}>game</button>
                <button className="postTag noselect" onClick={searchTag}>indie</button>
                <button className="postTag noselect" onClick={searchTag}>platformer</button>
                <button className="postTag noselect" onClick={searchTag}>meme</button>
                <button className="postTag noselect" onClick={searchTag}>lol</button>
                <button className="postTag noselect" onClick={searchTag}>haha</button>

            </div>
            <hr/>
            <div className="postButtons">
                <button className="Button" onClick={toggleLike}>
                    {/* <img src={upvote_icon}/> */}
                    <Image src={postLiked ? f_upvote_icon : upvote_icon} alt="upvote" width={16} height={16}/>
                </button>
                <div className="Button">
                    <Image src={comment_icon} alt="upvote" width={16} height={16}/>
                </div>
                <div className="Button">
                    <Image src={share_icon} alt="upvote" width={16} height={16}/>
                </div>
            </div>
        </div>
    )
}

function SearchBar(){

    const[searchText, setSearchText] = useState("")

    function clearText(){
        setSearchText("")
    }

    return(
        <div className="searchBar">
            <Image src={search_icon} alt="upvote" width={18} height={18}/>
            <input className="searchInput" type="text" placeholder="Search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            {searchText !== "" &&
                <button onClick={clearText}>
                    <Image src={close_icon} alt="upvote" width={18} height={18}/>
                </button>
            }
        </div>
    )
}