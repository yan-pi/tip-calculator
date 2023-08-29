import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionTypes } from "../store/actions";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

const CalculatorContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1024px) {
    margin-top: 16px;
  }
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  margin: auto;
`;

const ResetButton = styled.button`
  background-color: #1f2937;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0f1722;
  }
`;

function TipCalculator() {
  const dispatch = useDispatch();

  return (
    <CalculatorContainer>
      <TipInput />
      <div>
        <ResetButton onClick={() => dispatch({ type: ActionTypes.Reset })}>
          Reset
        </ResetButton>
        <TipResult />
      </div>
    </CalculatorContainer>
  );
}

export default TipCalculator;
