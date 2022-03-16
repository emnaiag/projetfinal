import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Partage from "./pages/partage/Partage";
import Apropos from "./pages/apropos/Apropos";
import Inscription from "./pages/inscription/Inscription";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PostDetails from "./components/postDetails/PostDetails";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "./redux/actions/post";
import MyPosts from "./components/myPosts/myPosts";
import Admin from "./pages/Admin/Admin";
function App() {
  // const [posts, setPosts] = useState([
  //     {
  //         id: "1",
  //         img: "https://i0.wp.com/olive-banane-et-pasteque.com/wp-content/uploads/2021/12/shopping-girlyz.jpg?resize=845%2C500&ssl=1",
  //         datePost: "18 Fev",
  //         type: "Shopping",
  //         title: "Shopping look de fêtes",
  //         description:
  //             " Je ne sais pas toi, mais j'ai deux à trois tenus de fêtes (avec de la paillete,.. ",
  //     },
  //     {
  //         id: "2",
  //         img: "https://i1.wp.com/olive-banane-et-pasteque.com/wp-content/uploads/2021/10/pistache-soda-obp.jpg?resize=845%2C500&ssl=1",
  //         datePost: "10 Fev",
  //         type: "Education",
  //         title: "PISTACHE ET SODA : LA POTION D’INVISIBILITÉ",
  //         description:
  //             "Pistache est une petite sorcière curieuse et malicieuse, qui vit avec sa maman et Soda, ",
  //     },
  // ]);
  const [categoriePost, setcategoriePost] = useState("");
  const handleSearch = (e) => {
    setcategoriePost(e.target.value);
  };
  const posts = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_posts());
  }, []);
  const Logged = localStorage.getItem("token");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

          <Home posts={posts} categoriePost={categoriePost} />
        </Route>

        <Route path="/contact">
          <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

          <Contact />
        </Route>
        <Route path="/apropos">
          <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

          <Apropos />
        </Route>
        {!Logged ? (
          <Redirect from="/partage" to="/login" />
        ) : (
          <Route path="/partage">
            <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

            <Partage />
          </Route>
        )}
        <Route path="/profile">
          <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

          <MyPosts />
        </Route>

        <Route path="/postDetails/:id">
          <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

          <PostDetails />
        </Route>

        {Logged ? (
          <Redirect from="/login" to="/" />
        ) : (
          <Route path="/login">
            <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

            <Login />
          </Route>
        )}
        {Logged ? (
          <Redirect from="/Inscription" to="/" />
        ) : (
          <Route path="/Inscription">
            <Navbar categoriePost={categoriePost} handleSearch={handleSearch} />

            <Inscription />
          </Route>
        )}

        <Route path="/admin">
          <Admin posts={posts} categoriePost={categoriePost} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
