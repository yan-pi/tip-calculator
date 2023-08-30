import { useSelector } from "react-redux";
import { SelectPerPerson, selectTip, selectTotal } from "../store/selectors";
import styled from "styled-components";

const ResultContainer = styled.div`
  flex-direction: row;
  padding: 16px;
`;

const ResultItem = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
`;

const TipResult = () => {
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
};

export default TipResult;
