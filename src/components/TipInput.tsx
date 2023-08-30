import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectBill, selectPercentage, selectSplit } from "../store/selectors";
import { ActionTypes } from "../store/actions";
import styled from "styled-components";

const InputContainer = styled.div`
  padding: 16px;
  border-radius: 4px;
`;

const SplitButton = styled.button`
  width: 33.33%;
  background-color: #047cfb;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0358c1;
  }
  &:active {
    background-color: #033e86;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
  color: #fff;
`;

const Label = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  color: #fff;
  background-color: #141a1f;
  border: 2px solid #232a31;
  border-radius: 4px;
`;

const SplitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TipInput = () => {
  const bill = useSelector(selectBill);
  const split = useSelector(selectSplit);
  const percentage = useSelector(selectPercentage);

  const dispatch = useDispatch();

  return (
    <InputContainer>
      <InputWrapper>
        <Label>Bill:</Label>
        <Input
          type="text"
          value={bill}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Tip %:</Label>
        <Input
          type="text"
          value={percentage}
          onChange={(e) =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Split:</Label>
        <SplitContainer>
          <SplitButton
            onClick={() =>
              dispatch({
                type: ActionTypes.SplitDecrement,
              })
            }
          >
            -
          </SplitButton>
          <div>{split}</div>
          <SplitButton
            onClick={() =>
              dispatch({
                type: ActionTypes.SplitIncrement,
              })
            }
          >
            +
          </SplitButton>
        </SplitContainer>
      </InputWrapper>
    </InputContainer>
  );
};

export default TipInput;
