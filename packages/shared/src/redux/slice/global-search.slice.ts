import {
  configureStore,
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type GlobalSearchSliceType = {
  isSearchBoxOpen: boolean;
};

const initialState: GlobalSearchSliceType = {
  isSearchBoxOpen: false,
};

export const GlobalSearchSliceName = "globalSearch";
export const globalSearchSlice: Slice<GlobalSearchSliceType> = createSlice({
  name: GlobalSearchSliceName,
  initialState,
  reducers: {
    setSearchBoxOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchBoxOpen = action.payload;
    },
  },
});

type GlobalSearchInterface = {
  globalSearch: GlobalSearchSliceType;
};

export let useGlobalSearchSelector: TypedUseSelectorHook<GlobalSearchInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { [GlobalSearchSliceName]: globalSearchSlice.reducer },
  });

export const isSearchBoxOpenSelector = (state: GlobalSearchInterface) => state.globalSearch.isSearchBoxOpen

type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useGlobalSearchDispatch = () => useDispatch<SliceDispatch>();

export const initializeGlobalSearchSlicePackage = (
  useAppDispatch: typeof useGlobalSearchDispatch,
  useAppSelector: typeof useGlobalSearchSelector
) => {
  useGlobalSearchDispatch = useAppDispatch;
  useGlobalSearchSelector = useAppSelector;
};

export const { setSearchBoxOpen } = globalSearchSlice.actions;
export const GlobalSearchReducer = globalSearchSlice.reducer;
