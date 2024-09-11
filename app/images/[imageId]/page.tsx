import {getPostById} from "@/lib/prisma/prima-post";
import {getImageById} from "@/lib/prisma/prisma-image";


export default async function ImageDetail({params}: { params: { imageId: string } }) {

        const image = await getImageById(params.imageId);

    if (!image) {
        return <div>image not found</div>;
    }

    return (
        <div>
            <h1>Image Detail</h1>
        </div>
    );
}