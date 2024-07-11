import { useState } from "react";
import toast from "react-hot-toast";
import { getPosts as getPostsRequest } from "../services/api";
import { addPost as addPostRequest } from "../services/api";

export const usePublication = () => {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {
        const postsData = await getPostsRequest();
        
        if (postsData.error) {
            return toast.error(
                postsData.e?.response?.data || 'Ocurrió un error al leer los canales'
            );
        }

        setPosts(postsData.data.posts);
    };

    const addPost = async(title, img, description, author, url) =>{

        setIsLoading(true)

        const response = await addPostRequest({
            title,
            img,
            description,
            author,
            url
        })
        setIsLoading(false)

        if(response.error){
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar, intenta de nuevo')
        }

        const { userDetails } = response.data
        localStorage.setItem('post', JSON.stringify(userDetails))
        toast.success('Task added successfully');
        window.location.reload();
    }

    return {
        getPosts,
        addPost,
        isFetching: !Boolean(posts),
        allPosts: posts,
        isLoading
    };
};

