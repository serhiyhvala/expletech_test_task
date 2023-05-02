import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "@services/posts.service.ts";
import {PostType} from "@type/post.type.ts";

type InitialStateType = {
  loading: boolean,
  posts: PostType[]
}

const initialState: InitialStateType = {
  loading: false,
  posts: []
}

export const fetchPosts = createAsyncThunk('postsSlice/fetchPosts', postsService.getPosts)

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
        fetchPosts.pending, state => {
          state.loading = true
        },
    )
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.loading = false
    })
  }
})

export  default postsSlice.reducer
