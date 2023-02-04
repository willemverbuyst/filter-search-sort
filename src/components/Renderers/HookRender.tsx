import { Card } from "react-bootstrap";

import { Hook } from "../../interfaces";
import styles from "../../styles/card.module.css";

export function HookRenderer(props: Hook): JSX.Element {
  const { name, custom } = props;

  return (
    <Card
      style={{ width: "30vw" }}
      className={custom ? `${styles.specialCard} m-2` : "m-2"}
    >
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>some text</Card.Text>
      </Card.Body>
      <Card.Footer>#id</Card.Footer>
    </Card>
  );
}
