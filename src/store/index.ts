import { createStore } from 'redux'

export interface StoreState {
  bill: number;
  percent: number;
  split: number;
}

export const store = createStore(
  () => {}
);