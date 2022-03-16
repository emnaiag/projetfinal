import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../../../redux/actions/post";
import { deletePost } from "../../../redux/actions/admin";
const AllPost = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_posts());
  }, []);

  const posts = useSelector((state) => state.postReducer.posts);
  const handleDelete= (id)=>{
        dispatch(deletePost(id))
  }
  return (
    <div class="wrapper" style={{ marginLeft: "400px" }}>
      <h1 className="titre-tab">Liste des publications</h1>
      <div class="table" style={{ width: "1000px" }}>
        <div class="row header grey">
          <div class="cell">Date Publication</div>
          <div class="cell">Utilisateur</div>
          <div class="cell">Catégorie</div>
          <div class="cell">Titre</div>
          <div class="cell">Commentaire</div>
          <div class="cell">Modification</div>
        </div>

        {posts &&
          posts.map((post, index) => {
            return (
              <div class="row" key={index}>
                <div class="cell" data-title="Date Post">
                  {post.datePost.substr(0, 10)}
                </div>
                <div class="cell" data-title="Post Creator">
                  {post.postCreator.username}
                </div>
                <div class="cell" data-title="Type">
                  {post.type}
                </div>
                <div class="cell" data-title="Title">
                  {post.title}
                </div>
                <div class="cell" data-title="Comments">
                  {post.comments.length}
                </div>
                <div class="cell" data-title="Settings">
                  <button onClick={() => handleDelete(post._id)}><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllPost;
