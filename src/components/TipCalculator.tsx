// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ActionTypes } from "../store/actions";
import { useDispatch } from "react-redux";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

function TipCalculator() {
  const dispatch = useDispatch();

  return (
    <div className="">
      <TipInput />
      <div>
        <button onClick={()=> dispatch({type: ActionTypes.Reset})}>
          Reset
        </button>
        <TipResult />
      </div>
    </div>
  );
}

export default TipCalculator;
