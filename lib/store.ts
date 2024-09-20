import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from "@/lib/features/CounteState/CounterSlice";
import ButtonEditPostSlice from "@/lib/features/post/edit/button-edit-post-slice";
import ToggleRightPanelSlice from "@/lib/features/image/detail/toggle-right-panel";
import EditPostImageSlice from "@/lib/features/post/edit/edit-post-image-slice";
import EditorPostSlice from "@/lib/features/post/shared/editor-post-slice";
import TagPostSlice from "@/lib/features/post/shared/tag-post-slice";
import ButtonIsRearrangingSlice from "@/lib/features/post/shared/button-is-rearranging-slice";
import InputPostNameSlice from '@/lib/features/post/shared/input-post-name';

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: CounterSlice,
            buttonEditPost: ButtonEditPostSlice,
            toggleRightPanel: ToggleRightPanelSlice,
            editPostImage: EditPostImageSlice,
            updateEditorPost: EditorPostSlice,
            tagPost: TagPostSlice,
            buttonIsRearranging: ButtonIsRearrangingSlice,
            inputPostName: InputPostNameSlice,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
