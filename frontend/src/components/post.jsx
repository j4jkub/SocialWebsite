import './style.css';
import upvoteIcon from '../assets/icons/upvote-svgrepo-com.svg';
import share from '../assets/icons/share-nodes-svgrepo-com.svg';
import profileIcon from '../assets/icons/profile-default-svgrepo-com.svg';
import { useContext } from 'react';
import {AuthModalProvider, ModalContext} from '../context/authModal';
import {useNavigate} from 'react-router';

export default function Post({ post }) {

  const {context, setContext} = useContext(ModalContext);
  const navigate = useNavigate();

  const OnUpvote = () => {
    setContext((prev) => ({ ...prev, isOpen: true, title: "To like post you need to be logged in" }));
  }

  const OnPostClick = () => {
    navigate(`/post`);
  }

  return (
    <div className="post">
      <h2 className="post-title" onClick={OnPostClick}>
        {post.title}
      </h2>
      <p className="post-author"> <img className="profile-icon" src={profileIcon} alt={post.author} /> <strong>{post.author}</strong></p>
      
      <p>{post.content}</p>
      <div className="post-actions">
        <button className="post-action"><img src={upvoteIcon} alt="Upvote" className="post-action-icon" onClick={() => OnUpvote()} /></button>
        {/* <button className="post-action"><img src={commentIcon} alt="Comment" className="post-action-icon" /></button> */}
        <button className="post-action"><img src={share} alt="Share" className="post-action-icon" /></button>
      </div>
    </div>
  );
}


export const useAuthModal = () => useContext(ModalContext);