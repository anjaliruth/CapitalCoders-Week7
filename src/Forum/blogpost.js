import { Link } from 'react-router-dom';

export default function BlogPost({ title, topics, id }) {
  return (
    <div>
      <h1>{title}</h1>
      
      {/* Map over each topic and create a button with a link */}
      {topics.map((topic, index) => (
        <Link key={index} to={`/forums/${id}/${topic}`}>
          <button>{topic}</button>
        </Link>
      ))}
    </div>
  );
}
