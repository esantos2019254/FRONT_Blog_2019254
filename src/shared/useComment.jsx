import { useState } from "react";
import toast from "react-hot-toast";
import { addComment as addCommentRequest } from "../services/api";

export const useComment = () => {

    const [isLoading, setIsLoading] = useState(false);

    const addComment = async(publicationId, comment, author, ) =>{

        setIsLoading(true)

        const response = await addCommentRequest({
            publicationId,
            comment,
            author,
        })
        setIsLoading(false)

        if(response.error){
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar, intenta de nuevo')
        }

        const { userDetails } = response.data
        localStorage.setItem('comment', JSON.stringify(userDetails))
        toast.success('Comment added successfully');
    }

    return {
        addComment,
        isLoading
    };
};

