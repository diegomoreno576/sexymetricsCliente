import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import openAi from '../services/openAi';
import getData from '../services/getData';



const initialState = {
    post_list: [],
    postAnalizis: [],
    postScore: [],
    currentPost: {},
    loadingAnalizis: false,
    loadingScore: false,
  };


export const analizePost = createAsyncThunk(
    'analizePost',
    async (post) => {
        const res = await openAi(post)
        return res.choices[0].text
    }
);

//score 
export const scorePost = createAsyncThunk(
    'scorePost',
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
            //dispasrch current post to the first post in the list
            dispatch(setCurrentPost(res[0]))
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
            state.loadingAnalizis = false
        },
        setPostList: (state, action) => {
            state.post_list = action.payload
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        setPostScore: (state, action) => {
            state.postScore = action.payload
        },

    },
    extraReducers: {
        [analizePost.fulfilled]: (state, action) => {
            state.postAnalizis = action.payload
            
            //push a new atrribute analizis to the post which isthe same id
            state.post_list.map((post) => {
                if (post.postId === state.currentPost.postId) {
                    post.analizis = action.payload
                          
                }
            }
            
            )
              //push analizis to the current post
              state.currentPost.analizis = action.payload
              state.loadingAnalizis = false
        },
        [scorePost.pending]: (state, action) => {
            state.loadingAnalizis = true
        },
        [scorePost.rejected]: (state, action) => {
            state.loadingAnalizis = false
        },
        [scorePost.fulfilled]: (state, action) => {
            state.postScore = action.payload
           
            //push a new atrribute analizis to the post which isthe same id
            state.post_list.map((post) => {
                if (post.postId === state.currentPost.postId) {
                    post.postScore = action.payload
                          
                }
            }
            
            )
              //push analizis to the current post
              state.currentPost.postScore = action.payload
                state.loadingScore = false
        },



    }
})

export const { setPostAnalizis } = analizePostSlice.actions
export const { setLoading } = analizePostSlice.actions
export const { setPostList } = analizePostSlice.actions
export const { setCurrentPost } = analizePostSlice.actions
export const { setPostScore } = analizePostSlice.actions




export default analizePostSlice.reducer