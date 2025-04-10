/** @format */

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
