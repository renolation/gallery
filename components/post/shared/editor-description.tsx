"use client";
import {RichTextEditor, Link} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {updateEditorPost} from "@/lib/features/post/shared/editor-post-slice";
import {useDebounce} from 'use-debounce';
import {useEffect} from "react";



export default function EditorDescription({text}: { text: string | null }) {
    const dispatch = useDispatch();


    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({types: ['heading', 'paragraph']}),
        ],
        immediatelyRender: false,
        content: text || '',
        onUpdate({editor}) {

        }
    });

    // Dispatch to Redux **after the editor has been initialized**
    useEffect(() => {
        if (editor && text) {
            dispatch(updateEditorPost(text));
        }
    }, [editor, text, dispatch]);

    const [debouncedEditor] = useDebounce(editor?.state.doc.content, 2000);

    useEffect(() => {
        if (debouncedEditor) {
            dispatch(updateEditorPost(editor?.getHTML()));
        }
    }, [debouncedEditor]);
    return (
        <RichTextEditor editor={editor}>
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold/>
                    <RichTextEditor.Italic/>
                    <RichTextEditor.Underline/>
                    <RichTextEditor.Strikethrough/>
                    <RichTextEditor.ClearFormatting/>
                    <RichTextEditor.Highlight/>
                    <RichTextEditor.Code/>
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1/>
                    <RichTextEditor.H2/>
                    <RichTextEditor.H3/>
                    <RichTextEditor.H4/>
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote/>
                    <RichTextEditor.Hr/>
                    <RichTextEditor.BulletList/>
                    <RichTextEditor.OrderedList/>
                    <RichTextEditor.Subscript/>
                    <RichTextEditor.Superscript/>
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link/>
                    <RichTextEditor.Unlink/>
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft/>
                    <RichTextEditor.AlignCenter/>
                    <RichTextEditor.AlignJustify/>
                    <RichTextEditor.AlignRight/>
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Undo/>
                    <RichTextEditor.Redo/>
                </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content/>
        </RichTextEditor>
    );
}