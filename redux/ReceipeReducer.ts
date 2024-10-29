import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const ReceipeReducer = createSlice({
    name: "receipe",
    initialState: {
        receipeData: [{
            id: 1,
            isMachinePrepare: false,
            isStep1: false,
            isStep2: false,
            isStep3: false,
            isTimer: false,
            isVideo: false,
            inputvalue: "",
            messageShow: ""
        }]
    },
    reducers: {
        setRecipeData(state, action: PayloadAction<any>) {
            state.receipeData = action.payload
        }
    }
})

export const { setRecipeData } = ReceipeReducer.actions
export default ReceipeReducer.reducer



