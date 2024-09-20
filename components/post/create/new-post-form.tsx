"use client";

import DropZoneButton from "@/components/post/create/drop-zone";
import EditImageCard from "@/components/post/create/edit-image-card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {CreatePostForm} from "@/components/post/create/create-post-form";

export default function NewPostForm() {

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
                    <EditImageCard key={index} imageString={image.imageUrl} imageIndex={index} saveChanges={saveChanges}/>
                </div>
            ))}
        </div>
    </>
}