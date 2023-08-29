import { useSelector } from "react-redux";
import {
  SelectPerPerson,
  selectTip,
  selectTotal,
} from "../store/selectors";
import styled from "styled-components";

const ResultContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResultItem = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

function TipResult() {
  const tip = useSelector(selectTip);
  const perPerson = useSelector(SelectPerPerson);
  const total = useSelector(selectTotal);

  return (
    <ResultContainer>
      <ResultItem>Bill Total: {total}</ResultItem>
      <ResultItem>Tip: {tip}</ResultItem>
      <ResultItem>Per Person: {perPerson}</ResultItem>
    </ResultContainer>
  );
}

export default TipResult;
