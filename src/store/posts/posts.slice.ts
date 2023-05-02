import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "@services/posts.service.ts";
import {PostType} from "@type/post.type.ts";
import {CommentType} from "@type/comment.type.ts";

type InitialStateType = {
  loading: boolean,
  posts: PostType[],
  comments: CommentType[]
}

const initialState: InitialStateType = {
  loading: false,
  posts: [],
  comments: []
}

export const fetchPosts = createAsyncThunk('postsSlice/fetchPosts', postsService.getPosts)
export const getComments = createAsyncThunk('postsSlice/getComments', (id: string) => postsService.getComments(id))

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
        }
    )
    builder.addCase(
        getComments.pending, state => {
          state.loading = true
        }
    )
    builder.addCase(
        getComments.fulfilled, (state, action) => {
          state.comments = action.payload
          state.loading = false
        }
    )
  }
})

export default postsSlice.reducer
