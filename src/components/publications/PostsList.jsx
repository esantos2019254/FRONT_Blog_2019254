import { Card } from "./CardPosts";

export const PostList = ({ posts }) => {
    console.log("Datos de posts:", posts);

    return (
        <div>
            {posts.map((post) => {
                if (!post._id) {
                    console.error("ID del post no definido:", post);
                    return null;
                }
                return (
                    <Card
                        key={post._id}
                        id={post._id} 
                        title={post.title}
                        img={post.img}
                        description={post.description}
                        author={post.author}
                        url={post.url}
                        comments={post.comments}
                    />
                );
            })}
        </div>
    );
};