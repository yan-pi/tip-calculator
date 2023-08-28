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
    <div className="border rounded-lg mb-2 w-full p-4 upperccase shadow-lg bg-gray-800 uppercase">
      <div>
        <div className="text-teal-400">Bill: </div>
        <input
          className="w-full bg-gray-800 text-white text-2xl"
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
        <div className="text-teal-400">Tip %: </div>
        <input
        className="w-full bg-gray-800 text-white text-2xl"
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
        <div className="text-center text-white">Split: </div>
        <div className="flex justify-between items-center">
          <button
            className="w-1/3 bg-teal-400 text-gray-800 text-2xl rounded"
            onClick={() =>
              dispatch({
                type: ActionTypes.SplitIncrement,
              })
            }
          >
            +
          </button>
          <div className="text-teal-400">{split}</div>
          <button
          className="w-1/3 bg-teal-400 text-gray-800 text-2xl rounded"
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
    </div>
  );
}

export default TipInput;
