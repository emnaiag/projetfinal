import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_post_detail, add_Comment } from "../../redux/actions/post";
import { Link } from "react-router-dom";
import "./PostDetails.css";
import Sidebar from "../sidebar/Sidebar";
const PostDetails = () => {
  const { id } = useParams();
  const postDetail = useSelector((state) => state.postReducer.postDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_post_detail(id));
  }, []);
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length !== 0) {
      dispatch(add_Comment(comment, id));
      setComment("");
    }
  };

  return (
    <div className="detail">
      <div className="post">
        <p
          style={{
            fontFamily: '"Dancing Script", cursive',
            fontSize: "40px",
            color: "brown",
            textAlign: "center"
          }}
        >
          {postDetail && postDetail.type}
        </p>
        <h1
          style={{
            fontFamily: '"Lora", serif,',
            fontWeight: "bold",
            fontSize: "40px",
            textTransform: "uppercase",
            textAlign: "center"
          }}
        >
          {postDetail && postDetail.title}
        </h1>
        <p style={{ fontFamily: "Josefin Sans, sans-serif" ,textAlign: "center"}}>
          {postDetail && postDetail.datePost.substr(0, 10)}
        </p>
        <img src={`/uploads/${postDetail && postDetail.img}`} width={1000} alt="postImg" />
        {/* user */}
        {/* <span>Author: {PostDetails.postAuthor.userName}</span> */}
        <p id="description">{postDetail && postDetail.description}</p>
            {/* Commentaire */}
            <p style={{marginTop: "30px", fontWeight: "bold", fontSize:"20px"}}>Commentaires:</p>
        <div className="block-comment">
          <div className="blog-comments">
            {postDetail &&
              postDetail.comments.map((comment, index) => {
                return (
                  <div className="post-com" key={index}>
                    <p id="poster">{comment.commenter} </p>
                    <p>{comment.comment}</p>
                  </div>
                );
              })}
          </div>
          {localStorage.getItem("token") ? (
            <form className="form">
              <input
                type="text"
                placeholder="Ajouter votre commentaire ..."
                className="comments"
                defaultValue={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="button-submit" hidden onClick={handleSubmit}>
                submit
              </button>
            </form>
          ) : (
            <h4>
              Connectez pour ajouter un commentaire ... <br></br><Link to="/login"><input
            type="button"
            className="btn"
            value="Login"
            style={{ cursor: "pointer" }}
          /></Link>
            </h4>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default PostDetails;
