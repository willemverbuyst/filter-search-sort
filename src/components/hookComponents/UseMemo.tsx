/* eslint-disable no-console */
import { useMemo, useState } from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getExpensiveValue = (num: number): number => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

export function UseMemoComponent(): JSX.Element {
  const [num1, setNum1] = useState<number>(1);
  const [num2, setNum2] = useState<number>(1);
  const expensiveValue = useMemo(() => getExpensiveValue(num2), [num2]);

  console.log("UseMemoComponent is rendered");

  const handleClickNum1 = () => {
    console.log("click num 1");
    setNum1(num1 + 1);
  };

  const handleClickNum2 = () => {
    console.log("click num 2");
    setNum2(num2 + 2);
  };

  return (
    <>
      <Card.Text>num1: {num1}</Card.Text>
      <Card.Text>num2: {num2}</Card.Text>
      <Card.Text>expensive value: {expensiveValue}</Card.Text>
      <Stack direction="horizontal" gap={2} className="justify-content-center">
        <Button variant="primary" onClick={handleClickNum1}>
          number 1
        </Button>
        <Button variant="primary" onClick={handleClickNum2}>
          number 2
        </Button>
      </Stack>
    </>
  );
}
