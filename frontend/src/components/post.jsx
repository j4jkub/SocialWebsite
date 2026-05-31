import './style.css';
import upvoteIcon from '../assets/icons/upvote-svgrepo-com.svg';
import share from '../assets/icons/share-nodes-svgrepo-com.svg';
import profileIcon from '../assets/icons/profile-default-svgrepo-com.svg';
import { useContext } from 'react';
import {AuthModalProvider, ModalContext} from '../context/authModal';

export default function Post({ post }) {

  const {context, setContext} = useContext(ModalContext);

  const OnUpvote = () => {
    setContext((prev) => ({ ...prev, isOpen: true }));
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>
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