import React from "react";
import { Switch, Route } from "react-router-dom";
import Post from "../../components/post/Post";
import AdminHeader from "./AdminHeader";
import Users from "./users/Users";
import AllPost from "./allPost/AllPost";
const Admin = ({ posts, categoriePost }) => {
    return (
        <div>
            <AdminHeader />
            <Switch>
                {/* <Route exact path="/admin">
                    {posts.map((post, index) => {
                        return <Post post={post} key={index} />;
                    })}
                </Route> */}
                <Route path="/admin/table-users">
                    <Users />
                </Route>
                <Route  path="/admin/table-posts">
                    <AllPost />
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;
