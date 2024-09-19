'use client'
import React, {useEffect, useState} from 'react';
import {Editor, EditorContent, useEditor} from '@tiptap/react';
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder';
import {useDebounce} from "use-debounce";
import {updatePostDescAction} from "@/action/post-action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {decrement} from "@/lib/features/CounteState/CounterSlice";
import {buttonSaving, buttonSaved} from "@/lib/features/edit-post/button-edit-post-slice";


const MenuBar = ({editor}: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <button onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                        className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}>
                    H1
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                        className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}>
                    H2
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                        className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}>
                    H3
                </button>
                <button onClick={() => editor.chain().focus().setParagraph().run()}
                        className={editor.isActive('paragraph') ? 'is-active' : ''}>
                    Paragraph
                </button>
                <button onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active' : ''}>
                    Bold
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'is-active' : ''}>
                    Italic
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'is-active' : ''}>
                    Strike
                </button>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={editor.isActive('highlight') ? 'is-active' : ''}>
                    Highlight
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        className={editor.isActive({textAlign: 'left'}) ? 'is-active' : ''}>
                    Left
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        className={editor.isActive({textAlign: 'center'}) ? 'is-active' : ''}>
                    Center
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        className={editor.isActive({textAlign: 'right'}) ? 'is-active' : ''}>
                    Right
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                        className={editor.isActive({textAlign: 'justify'}) ? 'is-active' : ''}>
                    Justify
                </button>
            </div>
        </div>
    );
};

const Tiptap = ({content, postId}: { content: string, postId: string }) => {

    const [editorContent, setEditorContent] = useState(content);
    const saveEditState = useSelector((state: RootState) => state.buttonEditPost.value);

    const dispatch = useDispatch();

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,
        ],
        immediatelyRender: false,
        content: content,
        onUpdate({editor}) {
            setEditorContent(editor.getHTML());
        }
    });
    const [debouncedEditor] = useDebounce(editor?.state.doc.content, 2000);

    useEffect(() => {
        console.log("content", content);
        console.log("editorContent", editorContent);
        if (content !== editorContent) {

            dispatch(buttonSaving()); // Set to "Saving: false"

            console.log("new content", editorContent);
            updatePostDescAction(postId, editorContent).then(r => {
                console.log("saveEditState", saveEditState);

                dispatch(buttonSaved()); // Set to "Saved": true

            });

        }


    }, [debouncedEditor]);
    return (
        <div>
            <MenuBar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    );
};

export default Tiptap;