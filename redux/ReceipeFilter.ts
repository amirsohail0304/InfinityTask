import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const ReceipeFilter = createSlice({
    name: "receipeFilter",
    initialState: {
        receipefilter: {
            isPortaValue: false,
            nameValue: "",
            selectedValue: "",
            isHelp: false,
            isPortafilterSize: false
        }
    },
    reducers: {
        setRecipeFilter(state, action: PayloadAction<any>) {
            state.receipefilter = action.payload
        }
    }
})

export const { setRecipeFilter } = ReceipeFilter.actions
export default ReceipeFilter.reducer



