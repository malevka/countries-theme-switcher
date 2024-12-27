import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface FiltersState {
  region: string | null;
  name: string;
}

const initialState: FiltersState = {
  region: null,
  name: ""
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    regionFilterChanged: (state, action: PayloadAction<string | null>) => {
      state.region = action.payload;
    },
    nameFilterChanged: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { regionFilterChanged, nameFilterChanged } = filtersSlice.actions;

export const selectRegion = (state: RootState) => state.filters.region;
export const selectName = (state: RootState) => state.filters.name;

export default filtersSlice.reducer;
