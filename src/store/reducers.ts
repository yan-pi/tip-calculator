import {Reducer, Action} from "redux";
import { StoreState } from ".";

export initialState: StoreState = {
  bill: 0,
  percent: 0,
  split: 1,
}

export const rootReducer: Reducer<StoreState, Action> = (
  state , action
) => {};