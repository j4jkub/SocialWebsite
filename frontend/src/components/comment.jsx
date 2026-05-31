import upVoteIcon from '../assets/icons/upvote-svgrepo-com.svg';
import profileIcon from '../assets/icons/profile-default-svgrepo-com.svg';

export default function Comment({ comment }) {
    return (
        <div className="comment">

           
            <p className="comment-author"> <img className="profile-icon" src={profileIcon} alt={comment.author} /> <strong>{comment.author}</strong></p>
            <p>{comment.text}</p>
            <button className="upvote-button">
                <img className="upvote-icon" src={upVoteIcon} alt="Upvote" />
            </button>
        </div>
    );
}