import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from "@/lib/features/CounteState/CounterSlice";
import ButtonEditPostSlice from "@/lib/features/edit-post/button-edit-post-slice";
import ToggleRightPanelSlice from "@/lib/features/image-detail/toggle-right-panel";
import EditPostImageSlice from "@/lib/features/edit-post/edit-post-image-slice";
import EditorCreateSlice from "@/lib/features/edit-post/editor-create-slice";
import TagPostSlice from "@/lib/features/edit-post/tag-post-slice";
import ButtonIsRearrangingSlice from "@/lib/features/edit-post/button-is-rearranging-slice";
import InputPostNameSlice from '@/lib/features/edit-post/input-post-name';

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: CounterSlice,
            buttonEditPost: ButtonEditPostSlice,
            toggleRightPanel: ToggleRightPanelSlice,
            editPostImage: EditPostImageSlice,
            updateEditor: EditorCreateSlice,
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
