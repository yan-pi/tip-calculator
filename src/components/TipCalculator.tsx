import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionTypes } from "../store/actions";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Define a altura total da tela */
`;

const CalculatorContainer = styled.div`
  background-color: #1c242c;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 50%;
  border-radius: 14px;
  justify-content: center;
`;

const ResetButton = styled.button`
  background-color: #047cfb;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px;
  text-align: center;
  width: 100%;
  transition: 900ms;

  &:hover {
    background-color: #0358c1;
  }
`;

const TipCalculator = () => {
  const dispatch = useDispatch();

  return (
    <CenteredContainer>
      <CalculatorContainer>
        <TipInput />
        <div>
          <ResetButton onClick={() => dispatch({ type: ActionTypes.Reset })}>
            Reset
          </ResetButton>
          <TipResult />
        </div>
      </CalculatorContainer>
    </CenteredContainer>
  );
};

export default TipCalculator;