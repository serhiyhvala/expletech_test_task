import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostCreateType, PostType} from "@type/post.type.ts";
import {CommentType} from "@type/comment.type.ts";
import {postsApi} from "@services/posts.services.ts";

type InitialStateType = {
  loading: boolean,
  posts: PostType[],
  comments: CommentType[],
  createdPosts: PostCreateType[]
}

const initialState: InitialStateType = {
  loading: false,
  posts: [],
  comments: [],
  createdPosts: []
}

export const getComments = createAsyncThunk('postsSlice/getComments', (id: string) => postsApi.getComments(id))

export const fetchPosts = createAsyncThunk('postsSlice/fetchPosts', postsApi.getPosts)

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    addPostToState: (state, action) => {
      state.posts.push(action.payload)
      state.createdPosts.push(action.payload)
      localStorage.setItem("posts", JSON.stringify(state.createdPosts))
    },
    getFromLocaleStorage: (state, action) => {
      state.createdPosts = action.payload
    }
  },
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

export const {addPostToState, getFromLocaleStorage} = postsSlice.actions

export default postsSlice.reducer
