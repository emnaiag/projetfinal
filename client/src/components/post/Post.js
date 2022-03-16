import "./post.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
    return (
        <Link to={`/postDetails/${post._id}`}>
            <div className="post">
                <div className="descriptionPost">
                    <div className="postLeft">
                        <span className="datepost">
                            {post.datePost.substr(0, 10)}
                        </span>
                        <img
                            src={`/uploads/${post.img}`}
                            alt="bijoux"
                            width={640}
                            height={410}
                        />
                    </div>
                    <div className="postRight">
                        <p className="postCategorie">{post.type}</p>
                        <p className="title">{post.title}</p>
                        <p className="description">{post.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Post;
