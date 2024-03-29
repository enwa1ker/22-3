import axios from "axios"

export const PostsDispatch = (payload) => ({type: "ADD_POSTS", payload})

export const postReducer = (state={
    posts: null
}, action) => {
    if(action.type === "ADD_POSTS") {
        return {
            posts: action.payload
        }
    }
    return state
}

export const fetchPosts = (URL) => {
    return (dispatch) => {
        axios.get(URL).then(resp =>
            dispatch(PostsDispatch(resp.data))
        )
    }
}