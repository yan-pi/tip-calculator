import { useDispatch } from "react-redux";

import { ActionTypes } from "../store/actions";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ModeToggle";

const TipCalculator = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Card className="w-[450px] flex flex-col m-10">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Tip Calculator</CardTitle>
            <ModeToggle />
          </div>
          <CardDescription>
            <TipInput />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="font-medium py-2 px-4  w-full "
            onClick={() => dispatch({ type: ActionTypes.Reset })}
          >
            Reset
          </Button>
        </CardContent>
      </Card>

      <Alert className="w-[450px]">
        <RocketIcon className="icon h-6 w-6 " />
        <div className="ml-3">
          <AlertTitle className="text-lg">Bill total</AlertTitle>
          <AlertDescription>
            <TipResult />
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};

export default TipCalculator;
