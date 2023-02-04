import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export function UseEffectComponent(): JSX.Element {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setNum((prev) => prev + 1), 3000);
    return () => clearInterval(timer);
  }, []);

  // eslint-disable-next-line no-console
  console.log("UseEffectComponent is rendered");

  return <Card.Text>{num}</Card.Text>;
}
