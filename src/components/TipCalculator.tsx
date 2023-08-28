import { useSelector } from "react-redux";
import { StoreState } from "../store";

function TipCalculator() {
  const bill = useSelector((state: StoreState) => state.bill);
  const tip = useSelector((state: StoreState) => state.tip);
  const split = useSelector((state: StoreState) => state.split);
  const percentage = useSelector((state: StoreState) => state.percentage);

  return (
    <div>
      <div>
        <span>Bill: </span>
        <input type="text" value={bill} />
      </div>

      <div>
        <span>Tip %: </span>
        <input type="text" value={percentage} />
      </div>

      <div>
        <span>Split: </span>
        <button>+</button>
        <span>{1}</span>
        <button>-</button>
      </div>
    </div>
  );
}

export default TipCalculator;
