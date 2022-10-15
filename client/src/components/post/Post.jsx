import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  const [blogData, setData] = useState([]);

  const getBlog = () => {
    axios.get("http://localhost:3002/post").then((response) => {
      console.log(response);
      const myBlog = response.data;
      setData(myBlog);
    });
  };

  useEffect(() => getBlog(), []);
  return (
    <>
      {blogData.map((blogs) => (
        <div className="post">
          <img className="postImg" src={img} alt="" />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">
                {/* <Link className="link" to="/posts?cat=Music"> */}
                Music
                {/* </Link> */}
              </span>
              <br />
              <span className="postDate">A.Sen</span>
            </div>
            <span className="postTitle">
              {/* <Link to="/post/abc" className="link"> */}
              {/* Lorem ipsum dolor sit amet */}
              {blogs.title}
              {/* </Link> */}
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">
            {blogs.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
          </p>
        </div>
      ))}
    </>
  );
}
