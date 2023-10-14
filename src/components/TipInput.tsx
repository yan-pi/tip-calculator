import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectBill, selectPercentage, selectSplit } from "../store/selectors";
import { ActionTypes } from "../store/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

const TipInput = () => {
  const bill = useSelector(selectBill);
  const split = useSelector(selectSplit);
  const percentage = useSelector(selectPercentage);

  const dispatch = useDispatch();

  return (
    <div className="p-4 rounded-md ">
      <div className="mb-4">
        <Label className="text-sm">Bill:</Label>
        <Input
          type="text"
          value={bill}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }
          className="w-full p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <Label className="text-sm">Tip %:</Label>
        <Input
          type="text"
          value={percentage}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }
          className="w-full p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <Label className="text-sm">Split:</Label>
        <div className="flex justify-between items-center">
          <Button
            onClick={() =>
              dispatch({
                type: ActionTypes.SplitDecrement,
              })
            }
            className="w-1/3  font-medium py-2 px-4 rounded cursor-pointer"
          >
            -
          </Button>
          <div className="w-1/3 text-center">{split}</div>
          <Button
            onClick={() =>
              dispatch({
                type: ActionTypes.SplitIncrement,
              })
            }
            className="w-1/3 font-medium py-2 px-4 rounded cursor-pointer"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TipInput;
