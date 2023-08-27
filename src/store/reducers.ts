/* eslint-disable @typescript-eslint/no-unused-vars */
import { Reducer, Action } from "redux";
import { ActionTypes, Actions } from "./actions";
import { StoreState } from ".";

const initalState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer: Reducer<StoreState, Actions> = (
  state = initalState,
  action
) => {
  switch (action.type) {
    case ActionTypes.BillChange:
      return {
        ...state,
        bill: Number(action.payload),
      };
    
    case ActionTypes.PercentageChange:
      return {
        ...state,
        percentage: Number(action.payload),
      }

    case ActionTypes.Reset:
      return {
        ...state,
        bill: 0,
        percentage: 0,
        split: 1,
      };

    case ActionTypes.SplitIncrement:
      return {
        ...state,
        split: state.split + 1,
      };

    case ActionTypes.SplitDecrement:
      return {
        ...state,
        split: state.split - 1,
      };

    default:
      return state;
  }
};

