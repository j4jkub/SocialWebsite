export default function Comment({ comment }) {
    return (
        <div className="comment">
            <p><strong>{comment.author}</strong>: {comment.text}</p>
        </div>
    );
}