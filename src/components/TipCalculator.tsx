// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ActionTypes } from "../store/actions";
import { useDispatch } from "react-redux";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

function TipCalculator() {
  const dispatch = useDispatch();

  return (
    <div className="p-2 mt-0 md:mt-8 lg:mt-16 w-full md:w-4/5 lg:w-1/2 m-auto">
      <TipInput />
      <div>
        <button 
        className="text-center text-3xl border rounded-lg bg-gray-800 w-full text-white uppercase shadow-lg"
        onClick={()=> dispatch({type: ActionTypes.Reset})}>
          Reset
        </button>
        <TipResult />
      </div>
    </div>
  );
}

export default TipCalculator;
