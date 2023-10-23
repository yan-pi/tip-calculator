import { test, expect } from 'vitest';
import { rootReducer as reducer, initalState } from './../reducers';
import { ActionTypes } from '../actions';

const testState = initalState;

test('reducer tests', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: ActionTypes.Reset })).toEqual(testState);
  });

  it('should set bill to number', () => {
    const payload = 100;
    
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill
    ).toBe(payload);
  });

  it('should set bill to decimal number', () => {
    const payload = 12.89;
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill
    ).toBe(payload);
  });

  it('should not be able to set string', () => {
    const payload = 'a';
    expect(
      reducer(testState, {
        type: ActionTypes.BillChange,
        payload: String(payload),
      }).bill
    ).not.toBe(payload);
  });

  it('should set percentage to number', () => {
    const payload = 100;
    expect(
      reducer(testState, {
        type: ActionTypes.PercentageChange,
        payload: String(payload),
      }).percentage
    ).toBe(payload);
  });

  it('should set bill to decimal number', () => {
    const payload = 12.89;
    expect(
      reducer(testState, {
        type: ActionTypes.PercentageChange,
        payload: String(payload),
      }).percentage
    ).toBe(payload);
  });

  it('should not be able to set string', () => {
    const payload = 'a';
    expect(
      reducer(testState, {
        type: ActionTypes.PercentageChange,
        payload: String(payload),
      }).percentage
    ).not.toBe(payload);
  });

  it('should increment split', () => {
    expect(reducer(testState, { type: ActionTypes.SplitIncrement }).split).toBe(2);
  });

  it('should decrement split', () => {
    expect(
      reducer(
        {
          ...testState,
          split: 3,
        },
        { type: ActionTypes.SplitDecrement }
      ).split
    ).toBe(2);
  });

  it('should not decrement split under 1', () => {
    expect(reducer(testState, { type: ActionTypes.SplitDecrement }).split).toBe(1);
  });

  it('should reset state', () => {
    expect(reducer(testState, { type: ActionTypes.Reset })).toEqual(testState);
  });
});