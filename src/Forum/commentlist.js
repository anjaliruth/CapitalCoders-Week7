import Comment from "./comment.js"; 
import { useParams } from "react-router-dom";

function CommentList({comments, data}) {
  const { topic } = useParams();
  return (
    <div id="CommentList">
    {/* loop over the comments array and give each comment the prop of id, author and content */}
    <p>{topic}</p>
    <p className = "forumTitle">Forum for this week:</p>
    {comments.map((comment)=> 
    <Comment key={comment.id} author={comment.author} content={comment.content} />
    )}</div>)

}

export default CommentList
