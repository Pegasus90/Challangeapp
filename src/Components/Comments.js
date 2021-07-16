import React, { useEffect, useState } from "react";
import axios from "axios";
import Commentcard from "./Commentcard";

const Comments = ({ location, history }) => {
  console.log(location.state.id);
  console.log(location.state);
  const [listofcomments, setListofcomments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((arr) => setListofcomments(arr.data));
  }, []);
  return (
    <div>
      {listofcomments
        .filter((comment) => comment.postId === location.state.id)
        .map((comment) => {
          return <Commentcard key={comment.postId} post={comment} />;
        })}
    </div>
  );
};

export default Comments;
