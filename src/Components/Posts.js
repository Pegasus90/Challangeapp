import React, { useEffect, useState } from "react";
import axios from "axios";
import Postcard from "./Postcard";

const Posts = ({ location, history }) => {
  console.log(location.state.id);
  const [listofposts, setListofposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((arr) => setListofposts(arr.data));
  }, []);
  return (
    <div>
      {
        // displaying list of users in cards
        listofposts
          .filter((post) => post.userId === location.state.id)
          .map((post) => {
            return <Postcard key={post.userId} post={post} />;
          })
      }
    </div>
  );
};

export default Posts;
