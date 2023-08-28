import { useSelector } from "react-redux";
import { StoreState } from "../store";
import { ActionTypes } from "../store/actions";
import { useDispatch } from "react-redux";

function TipCalculator() {
  const bill = useSelector((state: StoreState) => state.bill);
  const split = useSelector((state: StoreState) => state.split);
  const percentage = useSelector((state: StoreState) => state.percentage);

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
      </div>
    </div>
  );
}

export default TipCalculator;
