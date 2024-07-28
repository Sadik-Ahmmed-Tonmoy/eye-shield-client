import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShowColorState {
  items: { [id: string]: boolean };
}

const initialState: ShowColorState = {
  items: {},
};

export const showColorSlice = createSlice({
  name: "showColor",
  initialState,
  reducers: {
    showColor: (state, action: PayloadAction<string>) => {
      state.items[action.payload] = true;
    },
    hideColor: (state, action: PayloadAction<string>) => {
      state.items[action.payload] = false;
    },
  },
});

export const { showColor, hideColor } = showColorSlice.actions;
export default showColorSlice.reducer;
