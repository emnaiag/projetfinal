import Post from "../post/Post";
import "./posts.css";
import react, { useState } from "react";

const Posts = ({ filtrePosts }) => {
    return (
        <div className="posts">
            {filtrePosts.map((post, index) => {
                return <Post post={post} key={index} />;
            })}
        </div>
    );
};

export default Posts;
