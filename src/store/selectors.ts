import {StoreState} from "./index";

export type StoreSelector<T> = (state: StoreState) => T;

export const selectBill: StoreSelector<number> = (state) => state.bill;
export const selectPercentage: StoreSelector<number> = (state) => state.percentage;
export const selectSplit: StoreSelector<number> = (state) => state.split;

export const selectTotal : StoreSelector<number> = state => state.bill + (state.bill * (state.percentage / 100)) ;




