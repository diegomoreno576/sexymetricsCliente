import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import openAi from '../services/openAi';
import getData from '../services/getData';



const initialState = {
    post_list: [],
    postAnalizis: [],
    currentPost: {},
    loading: false,
  };


export const analizePost = createAsyncThunk(
    'analizePost',
    async (post) => {
        const res = await openAi(post)
        return res.choices[0].text
    }
);

//post list
export const getPostList = createAsyncThunk(
    'getPostList',
    async (params, { dispatch }) => {
        getData(params.api_url, params.start, params.end ).then((res) => {
            dispatch(setPostList(res))
          }
        );
    }
);



export const analizePostSlice = createSlice({
    name: 'analizePost',
    initialState,
    reducers: {
        setPostAnalizis: (state, action) => {
            state.postAnalizis = action.payload         
        },
        setLoading: (state, action) => {
            state.loading = false
        },
        setPostList: (state, action) => {
            state.post_list = action.payload
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
    },
    extraReducers: {
        [analizePost.fulfilled]: (state, action) => {
            state.postAnalizis = action.payload
            state.loading = false
            //push a new atrribute analizis to the post which isthe same id
            state.post_list.map((post) => {
                if (post.postId === state.currentPost.postId) {
                    post.analizis = action.payload
                          
                }
            }
            
            )
              //push analizis to the current post
              state.currentPost.analizis = action.payload

        },
        [analizePost.pending]: (state, action) => {
            state.loading = true
        },
        [analizePost.rejected]: (state, action) => {
            state.loading = false
        },
    }
})

export const { setPostAnalizis } = analizePostSlice.actions
export const { setLoading } = analizePostSlice.actions
export const { setPostList } = analizePostSlice.actions
export const { setCurrentPost } = analizePostSlice.actions



export default analizePostSlice.reducer