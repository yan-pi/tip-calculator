import { Action } from 'redux';

export enum ActionTypes {
  BillChange = "[Bill] Change",
  PercentageChange="[Percentage] Change",
  SplitIncrement="[Split] Increment",
  SplitDecrement="[Split] Decrement",
  Reset="[Reset]",
}

export interface BillChangeAction extends Action {
  type: ActionTypes.BillChange;
  payload: number;
}

export interface PercentageChangeAction extends Action {
  type: ActionTypes.PercentageChange;
  payload: number;
}

export interface ResetAction extends Action {
  type: ActionTypes.Reset;
}

export interface SplitIncrementAction extends Action {
  types: ActionTypes.SplitIncrement;
}

export interface SplitDecrementAction extends Action {
  types: ActionTypes.SplitDecrement;
}

export type Actions = 
  BillChangeAction |
  SplitIncrementAction |
  SplitDecrementAction |
  ResetAction |
  PercentageChangeAction;
