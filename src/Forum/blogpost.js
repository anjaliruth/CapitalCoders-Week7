export default function BlogPost({title, author, datePosted, content}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{datePosted}</p>
        <p>{content}</p>
        
      </div>
    )
  
  };
  