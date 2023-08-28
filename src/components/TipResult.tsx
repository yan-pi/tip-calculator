import { useSelector } from "react-redux";
import {
  SelectPerPerson,
  selectTip,
  selectTotal,
} from "../store/selectors";

function TipResult() {
  const tip = useSelector(selectTip);
  const perPerson = useSelector(SelectPerPerson);
  const total = useSelector(selectTotal);

  return (
    <div>
      <div>Bill Total: {total}</div>
      <div>Tip: {tip}</div>
      <div>PerPerson: {perPerson}</div>
    </div>
  )
}

export default TipResult