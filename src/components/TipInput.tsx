import { ActionTypes } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectBill,
  selectPercentage,
  selectSplit,
} from "../store/selectors";

function TipInput() {
  const bill = useSelector(selectBill);
  const split = useSelector(selectSplit);
  const percentage = useSelector(selectPercentage);

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
    </div>
  );
}

export default TipInput;
