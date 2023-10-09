import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "languages",
  initialState: {
    selectedLang: "en",
  },
  reducers: {
    getLanguage: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
});
export const { getLanguage } = languageSlice.actions;
export default languageSlice.reducer;
