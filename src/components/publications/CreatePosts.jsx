import React, { useState } from "react";
import { usePublication } from "../../shared/usePublication";
import toast from "react-hot-toast";

export const AddPost = ({ switchPostHandler }) => {

    const { addPost, getPosts, isLoading } = usePublication();

    const [formState, setFormState] = useState({
        title: {
            value: '',
            isValid: false,
            showError: false
        },
        img: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        author: {
            value: '',
            isValid: false,
            showError: false
        },
        url: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleAddPost = async (event) => {
        event.preventDefault();
        const { title, img, description, author, url, comments } = formState;
        await addPost(title.value, img.value, description.value, author.value, url.value);
        setFormState({
            title: {
                value: '',
                isValid: false,
                showError: false
            },
            img: {
                value: '',
                isValid: false,
                showError: false
            },
            description: {
                value: '',
                isValid: false,
                showError: false
            },
            author: {
                value: '',
                isValid: false,
                showError: false
            },
            url: {
                value: '',
                isValid: false,
                showError: false
            }
        });
        await getPosts();
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Agregar Publicación</h2>
            <form className="max-w-md mx-auto">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Título"
                        value={formState.title.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'title')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        value={formState.img.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'img')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Descripción"
                        value={formState.description.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'description')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Autor"
                        value={formState.author.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'author')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="URL del Artículo"
                        value={formState.url.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'url')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleAddPost}
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Agregar Publicación
                    </button>
                </div>
            </form>
            <span onClick={switchPostHandler}>
            </span>
        </div>
    );
};