import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from "@/lib/features/CounteState/CounterSlice";
import ButtonEditPostSlice from "@/lib/features/edit-post/button-edit-post-slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: CounterSlice,
            buttonEditPost: ButtonEditPostSlice,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
