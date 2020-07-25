const ADD_NEWS = "ADD_NEWS";
const ADD_ALL = "ADD_ALL";


let initialState = {
    newsData: [
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                newsData: [...state.newsData, action.news]
            }

        }
        case ADD_ALL: {
            return {
                ...state,
                newsData: action.newsData
            }
        }
        default: return state;
    }
}


export const actionAddPost = (news) => {
    return { type: ADD_NEWS, news}
}

export const actionUpdatePost = (text) => {
    return { type: ADD_ALL, text: text }
}

//ThunkCreators

export const getProfile = (id) => {
    return (dispatch) => {
        profileApi.getProfile(id)
            .then(data => {
                dispatch(SetUserProfile(data));
            })
    }
}


export default profileReducer;