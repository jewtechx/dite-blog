import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading:false,
    ready: false,
    error:false
}

//Products Slice
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{}
})