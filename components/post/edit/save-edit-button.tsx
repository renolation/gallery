"use client";

// Importing the RootState type from the store definition.
import {RootState} from "@/lib/store";
// Importing the useSelector hook from react-redux to access the Redux store's state.
import {useSelector} from "react-redux";

export default function SaveEditButton() {
// true: saved, false: saving
    const saveEditState = useSelector((state: RootState) => state.buttonEditPost.value);
    return (
        <button>

            {saveEditState ? "Saved" : "Saving"}
        </button>
    );
}