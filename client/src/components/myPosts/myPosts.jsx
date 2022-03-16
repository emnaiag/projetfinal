import React, { useEffect, useState } from "react";
import "./myPosts.css";
import {
  get_current_posts,
  delete_current_post,
} from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import EditPost from "../../components/EditPost/EditPost";
import { Link } from "react-router-dom";
const MyPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_current_posts());
  }, []);

  const myPosts = useSelector((state) => state.postReducer.myPosts);

  const [show, setShow] = useState(false);

  const [component, setComponent] = useState();

  const handleEdit = (post) => {
    setShow(true);
    setComponent(<EditPost post={post} setShow={setShow} />);
  };
  return (
    <div className="posts">
      {show ? component : null}
      {myPosts.map((post) => {
        return (
          <div className="post-card" key={post._id}>
            <div className="info">
              <img
                src={post && `/uploads/${post.img}`}
                alt="Image"
                width={"400px"}
                height="400px"
                className="postImg"
              />
              <Link to={`/${post._id}`}>
                <h4 className="postTitle">{post && post.title}</h4>
              </Link>
              <p className="postDescription">{post && post.description}</p>
              <div className="PostCard-btn">
                <button id="editButton" onClick={() => handleEdit(post)}>
                  Edit
                </button>
                <button
                  id="deleteButton"
                  onClick={() => dispatch(delete_current_post(post._id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
