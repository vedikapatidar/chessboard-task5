import { createSlice } from "@reduxjs/toolkit";

const initialState = Array(8)
  .fill(null)
  .map((_, rowIndex) =>
    Array(8)
      .fill(null)
      .map((_, colIndex) => ({
        color: (rowIndex + colIndex) % 2 === 0 ? "white" : "black",
      }))
  );

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { row, col } = action.payload;
      const square = state[row][col];
      square.color = square.color === "white" ? "yellow" : "red";
    },
  },
});

export const { changeColor } = boardSlice.actions;
export default boardSlice.reducer;
