// import {Link} from "react-router-dom";
// import React from "react";
// export default function BlogPost({title, topics}) {
  
//     const handleChange = (event) => {
//       // handle the selected value change here
//     };
  
//     return (
//       <div className="blogTitle">
//         <h1>{title}</h1>
//         <div className="topicsList">
//           <p>Topics covered this week: </p>
//           <select onChange={handleChange}>
//             {topics.map((topic, index) => (
//               <option key={index} value={topic}>
//                 {topic}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
//   };

  //               <Link to={`/forums/${topic.id}/${topic.index}`}>

  import { Link, useNavigate } from "react-router-dom";
  import React from "react";
  
  export default function BlogPost({ title, topics }) {
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const topicIndex = event.target.value;
      navigate(`/forum/${topicIndex}`);
    };
  
    return (
      <div className="blogTitle">
        <h1>{title}</h1>
        <div className="topicsList">
          <p>Topics covered this week: </p>
          <select onChange={handleChange}>
            {topics.map((topic, index) => (
              <option key={index} value={index}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  