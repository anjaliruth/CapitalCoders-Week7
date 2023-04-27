import {Link} from "react-router-dom";
import React from "react";


export default function BlogPost({ title, topics, data }) {
  const handleSelectChange = (event) => {
    const selectedTopicIndex = event.target.value;
    // handle selected topic change here
  };

  return (
    <div className="blogTitle">
      <h1>{title}</h1>
      <div className="topicsList">
        <p>Topics covered this week:</p>
        
    

        <div>
          {data.map((week) =>
            week.topics.map((topic, index) => {
              if (topic === topics[index]) {
                return (
                  <Link
                    key={`${week.id}-${index}`}
                    to={`/forums/${week.id}/${index}`}
                  >
                  <select>
                    <option key={index} value={index}>
                      {topic}
                    </option>
                  </select>
                  
                  </Link>
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
}








  //               <Link to={`/forums/${topic.id}/${topic.index}`}>

  // {/* // import { Link, useNavigate } from "react-router-dom";
  // // import React from "react";
  
  // // export default function BlogPost({ title, topics }) { */}
  // //   const navigate = useNavigate();
  
  // //   const handleChange = (event) => {
  // //     const topicIndex = event.target.value;
  // //     navigate(`/forum/${topicIndex}`);
  // //   };
  
  // //   return (
  // //     <div className="blogTitle">
  // //       <h1>{title}</h1>
  // //       <div className="topicsList">
  // //         <p>Topics covered this week: </p>
  // //         <select onChange={handleChange}>

  // //           {topics.map((topic, index) => (
  // //             <option key={index} value={index}>
  // //               {topic}
  // //             </option>
  // //           ))}
  // //         </select>
  // //       </div>
  // //     </div>
  // //   );
  // // };
  
  