"use client";

import DropZoneButton from "@/components/post/create/drop-zone";
import EditImageCard from "@/components/post/create/edit-image-card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {CreatePostForm} from "@/components/post/create/create-post-form";
import {Image as ImageDB} from "@prisma/client";
import {useEffect} from "react";
import {addImage, clearImage} from "@/lib/features/post/edit/edit-post-image-slice";
import {useIsFirstRender} from "@mantine/hooks";
import {usePathname} from "next/navigation";

export default function NewPostForm({images}: { images: ImageDB[] }) {
    const dispatch = useDispatch();
    console.log(images.length);
    const firstRender = useIsFirstRender();

    const pathname = usePathname();

    useEffect(() => {
        if (pathname.match('/posts/create')) {
            dispatch(clearImage());
        }
    }, [pathname, dispatch]);



    useEffect(() => {
        console.log('useEffect triggered');
        console.log('images:', images);

        if (images.length > 0) {
            console.log('Clearing images');
            dispatch(clearImage());
            for (const image of images) {
                console.log('Adding image:', image);
                dispatch(addImage(image));
            }
        }
    }, [images, dispatch]);

    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);


    const saveChanges = () => {
        console.log('Save changes');
        console.log(editPostImageState);
    }

    return <>
        <DropZoneButton/>
        <div>
            {editPostImageState.map((image, index) => (
                <div className="py-4" key={index}>
                    <EditImageCard key={index} imageString={image.imageUrl} imageIndex={index}
                                   saveChanges={saveChanges}/>
                </div>
            ))}
        </div>
    </>
}