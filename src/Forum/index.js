import {useState} from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";
import {Routes, Route} from "react-router-dom";
import "./index.css";
import {useParams} from "react-router-dom";

function Forum({data}) {
  const {id} = useParams();
  const [comments, setComments] = useState(data[id-1].pretext);

  return (
    <div>
      <BlogPost 
        title={`Week ${id}`} 
        topics={data[id-1].topics} 
        arrayid={data[id-1].id} 
        data={data}
      />

      <Routes>
        {data[id-1].topics.map((topic, index) => (
          <Route 
            key={index} 
            path={`/forums/${id}/${index}`} 
            element={<CommentList comments={comments} data={data} />}
          />
        ))}
      </Routes>

      <CommentForm comments={comments} setComments={setComments} />
    </div>
  );
}

export default Forum
/*
    <Routes>
      <Route path = "/" element = {<Grid data = {weekGrid} />}/>
      <Route path = "/forums/:id" element = {<Forum data = {weekGrid}/>}/>
      <Route/>
    </Routes>
  */