import "./partage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/post";
import { useHistory } from "react-router-dom";

const Partage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = new FormData();

        post.append("description", description);
        post.append("title", title);
        post.append("type", category);
        if (img) {
            post.append("img", img);
        }
        dispatch(addPost(post, history));
    };
    return (
        <div className="partage">
            <form className="partagForm">
                <div className="partagFormGroup">
                    <div className="telechargepartage">
                        <label htmlFor="fileinput">
                            <i className="partageIcon fa-solid fa-plus"></i>
                        </label>
                        <input
                            type="file"
                            id="fileinput"
                            style={{ display: "none" }}
                            onChange={(e) => setImg(e.target.files[0])}
                        />
                        <input
                            type="text"
                            placeholder="Catégorie"
                            className="partagecategorie"
                            autoFocus={true}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Title"
                        className="partagetitle"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="partagFormGroup">
                    <textarea
                        placeholder="Partagez avec nous votre expérience "
                        type="text"
                        className="partagehistoire"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className="partagesubmit" onClick={handleSubmit}>
                        Partagez
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Partage;
