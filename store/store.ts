import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import bookReducer from './Slices/bookSlice'
// ...

const store = configureStore({
    reducer: {
        books: bookReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store