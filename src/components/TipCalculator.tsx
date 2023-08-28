/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import { StoreState } from "../store";
import { ActionTypes } from "../store/actions";
import { useDispatch } from "react-redux";
import {
  SelectPerPerson,
  selectBill,
  selectPercentage,
  selectSplit,
  selectTip,
  selectTotal,
} from "../store/selectors";

function TipCalculator() {
  const bill = useSelector(selectBill);
  const split = useSelector(selectSplit);
  const percentage = useSelector(selectPercentage);
  const tip = useSelector(selectTip);
  const perPerson = useSelector(SelectPerPerson);
  const total = useSelector(selectTotal);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>Bill: </span>
        <input
          type="text"
          value={bill}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <span>Tip %: </span>
        <input
          type="text"
          value={percentage}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <span>Split: </span>
        <button
          onClick={() =>
            dispatch({
              type: ActionTypes.SplitIncrement,
            })
          }
        >
          +
        </button>
        <span>{split}</span>
        <button
          onClick={() =>
            dispatch({
              type: ActionTypes.SplitDecrement,
            })
          }
        >
          -
        </button>

        <button
          onClick={() =>
            dispatch({
              type: ActionTypes.Reset,
            })
          }
        >
          Reset
        </button>
      </div>

      <div>
        <div>Bill Total: {total}</div>
        <div>Tip: {tip}</div>
        <div>PerPerson: {perPerson}</div>
      </div>
    </div>
  );
}

export default TipCalculator;
