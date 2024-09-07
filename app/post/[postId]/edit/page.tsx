
export default function EditPostPage({params}: {params: {postId: string}}) {
    return (
        <div>
            <h1>Edit Post {params.postId}</h1>
        </div>
    );
}