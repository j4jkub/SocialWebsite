import React from 'react';
import Banner from '../../components/banner';
import SearchBar from '../../components/searchBar';
import Post from '../../components/post';
import SideBar from '../../components/sideBar';
import'./postDetailsPage.css';
import backIcon from '../../assets/icons/arrow-left-svgrepo-com.svg';
import Comment from '../../components/comment';
import {useNavigate, useParams} from 'react-router-dom';
import {AuthModalProvider, ModalContext} from '../../context/authModal';
import { useContext, useEffect, useState} from 'react';
import axios from 'axios';

export default function PostDetailsPage() {
    let navigate = useNavigate();
    const { postId } = useParams();
    const {context, setContext} = useContext(ModalContext);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([])

    const onCommentSubmit = (e) => {
        e.preventDefault();
        setContext((prev) => ({ ...prev, isOpen: true, title: "To comment on post you need to be logged in" }));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/posts/${postId}/`)
            .then(response => {
                // console.log("Fetched posts:", response.data);
                setPost(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
        
    }, []);

    useEffect(() => {
        if(post == null) return
        axios.get(`http://localhost:8000/comments/?post_id=${post.author}`)
            .then(response => {
                // console.log("Fetched comments:", response.data);
                setComments(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching comments:", error);
            });
    }, [post])

    return (
        <div className="post-details-page">
            <Banner />
            <div className="main-content">
                <SearchBar />
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <img className="back-icon" src={backIcon} alt="Back" />
                    </button>
                {post &&
                <div className="post-details-content">
                    <div>
                        <Post post={post} />
                        <div className="comments-section">
                            <h3>Comments</h3>
                            <form className="comment-form">
                                <p className="comment-form-title">Leave a Comment</p>
                                <textarea placeholder="Write a comment..." />
                                <button type="submit" onClick={onCommentSubmit}>
                                    Post Comment
                                </button>
                            </form>
                            {
                                comments && comments.map(comment => (
                                    <Comment key={comment.id} comment={comment} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}