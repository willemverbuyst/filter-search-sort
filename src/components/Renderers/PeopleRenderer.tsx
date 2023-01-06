import { Card } from 'react-bootstrap';
import { Person } from '../../interfaces/Person';
import styles from '../../styles/card.module.css';

export function PeopleRenderer(props: Person) {
  const { _id, firstName, age, eyeColor, surname, email } = props;
  return (
    <Card
      style={{ width: '30vw' }}
      className={eyeColor === 'blue' ? `${styles.specialCard} m-2` : 'm-2'}
    >
      <Card.Header>
        {firstName} {surname}
      </Card.Header>
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Text>{eyeColor}</Card.Text>
        <Card.Text>{age}</Card.Text>
      </Card.Body>
      <Card.Footer>#{_id}</Card.Footer>
    </Card>
  );
}
