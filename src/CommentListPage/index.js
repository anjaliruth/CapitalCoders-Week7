import CommentList from '../Forum/commentlist.js';

function CommentListPage({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <CommentList comments={comments} />
    </div>
  );
}

export default CommentListPage;
