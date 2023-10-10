import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
    name: "root",
    initialState: {
      quote: "",
      image: "",
      user_token: "",
    },
    reducers: {
        //  action is submitted elsewhere - written to state.name
        chooseQuote: (state, action) => { state.quote = action.payload },
        chooseImage: (state, action) => { state.image = action.payload },
        chooseUser: (state, action) => { state.user_token = action.payload }
    }
})

export const rootReducer = rootSlice.reducer;
export const { chooseQuote, chooseImage, chooseUser} = rootSlice.actions