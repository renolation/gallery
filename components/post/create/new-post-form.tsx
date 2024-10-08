"use client";

import DropZoneButton from "@/components/post/create/drop-zone";
import EditImageCard from "@/components/post/create/edit-image-card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {CreatePostForm} from "@/components/post/create/create-post-form";
import {useEffect} from "react";
import {addImage, clearImage, ImageWithTags} from "@/lib/features/post/edit/edit-post-image-slice";
import {useIsFirstRender} from "@mantine/hooks";
import {usePathname} from "next/navigation";
import {Image as ImageDB} from "@prisma/client";

export default function NewPostForm({images}: { images: ImageWithTags[] }) {
    const dispatch = useDispatch();

    const pathname = usePathname();

    useEffect(() => {
        if (pathname.match('/posts/create')) {
            dispatch(clearImage());
        }
    }, [pathname, dispatch]);





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
                    <EditImageCard key={index} imageString={image.imageUrl} image={image} imageIndex={index}
                                   saveChanges={saveChanges}/>
                </div>
            ))}
        </div>
    </>
}