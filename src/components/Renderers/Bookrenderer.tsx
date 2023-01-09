import { Card } from "react-bootstrap";
import { Book } from "../../interfaces/Book";
import styles from "../../styles/card.module.css";

export function BookRenderer(props: Book) {
  const { _id, author, pages, inPrint, title } = props;
  return (
    <Card
      style={{ width: "30vw" }}
      className={inPrint ? `${styles.specialCard} m-2` : "m-2"}
    >
      <Card.Header>{author}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>pages: {pages} </Card.Text>
      </Card.Body>
      <Card.Footer>#{_id}</Card.Footer>
    </Card>
  );
}
