import { useState } from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { useParams } from "react-router-dom";

function Forum({ data }) {
  //created comments array
  const { id } = useParams();
  const [comments, setComments] = useState(data[id - 1].pretext);
  return (
    <div>
      <BlogPost title={`Week ${id}`} topics={data[id - 1].topics} data={data}/>

      <Routes>
        <Route
          path="/forums/:id/:topic"
          element={<CommentList comments={comments} />}
        />
        <Route />
      </Routes>
      <CommentForm comments={comments} setComments={setComments} />
    </div>
  );
}

export default Forum;
