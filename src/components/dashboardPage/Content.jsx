import { Route, Routes } from "react-router-dom";
import { PostList } from "../publications/PostsList";
import { AddPost } from "../publications/CreatePosts"

export const Content = ({ posts, getPosts }) => {
    return (
        <div className="">
            <Routes>
                <Route path="/posts" element={<PostList posts={posts} />}/>
                <Route path="/create" element={<AddPost posts={posts} />}/>
            </Routes>
        </div>
    );
};