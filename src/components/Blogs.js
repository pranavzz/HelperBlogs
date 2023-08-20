import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blogs.css";
const Blogs = () => {
  // CONSUME
  const { posts, loading } = useContext(AppContext);
  console.log("Printing inside blogs component");
  console.log(posts);

  return (
    <div className="blogs-adjust mt-5 mb-5 h-screen">

      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Available</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-4">
            <p className="fs-4 title fw-bold">{post.title}</p>

            <div className="fs-blogs">
            <p>
              By <span className="fst-italic">{post.author}</span> on <span className="text-decoration-underline fw-bold">{post.category}</span>
            </p>
            <p className="mb-2">Posted on {post.date}</p>
            <p>{post.content}</p>
            </div>

            <div>
            <div className="title1">
              {post.tags.map((tag, index) => (
                <span className='text-decoration-underline me-3' href='#' key={index}>{`#${tag}`}</span>
              ))}
            </div>

            </div>
            
            
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
