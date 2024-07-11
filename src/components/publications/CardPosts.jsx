import React, { useState } from "react";
import { useComment } from "../../shared/useComment";

export const Card = ({
  title,
  img,
  description,
  author,
  url,
  comments,
  id,
}) => {
  const { addComment, isLoading } = useComment();
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) {
      return;
    }

    try {
      console.log("Publication ID:", id);

      await addComment(id, newComment, authorName);
      setNewComment("");
      setAuthorName("");
      setSuccessMessage("Comment added successfully");
      window.location.reload();
    } catch (error) {
      setError(error.response?.data || 'An error occurred while adding the comment');
    }
  };

  return (
    <div className="inline-block w-1/4 p-4">
      <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden" style={{ height: '80vh' }}>
        <img
          className="w-full h-32 object-cover"
          src={img}
          alt={title}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-500">{author}</p>
            <a
              href={url}
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-600"
            >
              Read more
            </a>
          </div>
          <div className="mt-2">
            <h3 className="text-gray-700 font-semibold">Comments:</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment._id || comment.comment}>
                  <p className="text-gray-600">{comment.comment}</p>
                  <p className="text-gray-500">Author: {comment.author}</p>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="mt-2 w-full p-2 border border-gray-300 rounded"
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <input
              className="mt-2 w-full p-2 border border-gray-300 rounded"
              placeholder="Your name..."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              disabled={isLoading}
            >
              {isLoading ? "Adding Comment..." : "Add Comment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};