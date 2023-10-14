import { useSelector } from "react-redux";
import { SelectPerPerson, selectTip, selectTotal } from "../store/selectors";

const TipResult = () => {
  const tip = useSelector(selectTip);
  const perPerson = useSelector(SelectPerPerson);
  const total = useSelector(selectTotal);

  return (
    <div className="p-4 flex gap-8">
      <div className="mb-2 text-lg">Bill Total: {total}</div>
      <div className="mb-2 text-lg">Tip: {tip}</div>
      <div className="text-lg">Per Person: {perPerson}</div>
    </div>
  );
};

export default TipResult;
