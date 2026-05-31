import './style.css';
import upvoteIcon from '../assets/icons/upvote-svgrepo-com.svg';
// import commentIcon from '../assets/icons/comment-icon.svg';
// import commentIcon from '../assets/icons/comment-svgrepo-com.svg';
import share from '../assets/icons/share-nodes-svgrepo-com.svg';

export default function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-actions">
        <button className="post-action"><img src={upvoteIcon} alt="Upvote" className="post-action-icon" /></button>
        {/* <button className="post-action"><img src={commentIcon} alt="Comment" className="post-action-icon" /></button> */}
        <button className="post-action"><img src={share} alt="Share" className="post-action-icon" /></button>
      </div>
    </div>
  );
}