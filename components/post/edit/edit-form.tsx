import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function PostEdit() {

    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        // Fetch the post data including the image URL
        const fetchPost = async () => {
            const response = await fetch(`/api/posts/${postId}`);
            const post = await response.json();
            setImageSrc(post.imageUrl);
        };

        if (postId) {
            fetchPost();
        }
    }, [postId]);

    return (
        <>
            <h1>Edit Post</h1>
            {imageSrc && <img src={imageSrc} alt="Selected" />}
            {/* Add form fields to edit the post */}
        </>
    );

}