import {useState} from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";
import {Routes, Route} from "react-router-dom";
import "./index.css";
import {useParams} from "react-router-dom";

function Forum({data}) {
  //created comments array
  const  {id} = useParams()
  const [comments, setComments] = useState(data[id-1].pretext);
  return (
    <div>

  <BlogPost title= {`Week ${id}`} topics={data[id-1].topics} />

  {/* call commentList and pass it the props of comments array  */}
  <Routes>
  {/* path needs to change to /forums/:id/{topic} */}
      <Route path = "/" element = {<CommentList comments={comments} />}/>
      <Route path = "/:topic" element = {<CommentList comments={comments} />}/>
  {/* <CommentForm comments={comments} setComments={setComments}/> */}
  </Routes>
  </div>
  )
}

export default Forum;

/*
    <Routes>
      <Route path = "/" element = {<Grid data = {weekGrid} />}/>
      <Route path = "/forums/:id" element = {<Forum data = {weekGrid}/>}/>
      <Route/>
    </Routes>
  */