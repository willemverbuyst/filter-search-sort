import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function UseStateComponent(): JSX.Element {
  const [numArr, setNumArr] = useState<number[]>([]);
  const [num, setNum] = useState<number | null>();

  const handleClick = (): void => {
    setNumArr([...numArr, numArr.length + 1]);
    setNum((prev) => (prev ? prev + 1 : 1));
  };

  // eslint-disable-next-line no-console
  console.log("UseStateComponent is rendered");

  return (
    <>
      <Card.Text>array with numbers: {JSON.stringify(numArr)}</Card.Text>
      <Card.Text>number: {num}</Card.Text>
      <Button variant="primary" onClick={handleClick}>
        add number
      </Button>
    </>
  );
}
