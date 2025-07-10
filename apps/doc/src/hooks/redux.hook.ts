import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { initializeGlobalSearchSlicePackage } from "@fluctux/shared";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

initializeGlobalSearchSlicePackage(useAppDispatch, useAppSelector)