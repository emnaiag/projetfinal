import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.css";

const Home = ({ posts, categoriePost }) => {
    const filtrePosts = posts.filter((post) => {
        return post.type.toLowerCase().includes(categoriePost.toLowerCase());
    });
    return (
        <>
            <Header />
            <div className="home">
                <Posts filtrePosts={filtrePosts} />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;
