import { Form, Stack } from 'react-bootstrap';

interface Props<T extends Record<PropertyKey, any>> {
  object: T;
  properties: Array<keyof T>;
  onChangeFilter: (property: keyof T) => void;
}

export default function Filters<T extends Record<PropertyKey, any>>(
  props: Props<T>
) {
  const { object, properties, onChangeFilter } = props;
  return (
    <Stack className="justify-content-center" direction="horizontal">
      {Object.keys(object).map((key) => {
        return (
          <Form.Group key={key} className="m-3" controlId={key}>
            <Form.Check
              type="checkbox"
              value={key}
              onChange={() => onChangeFilter(key)}
              checked={properties.some((property) => property === key)}
              label={key}
            />
          </Form.Group>
        );
      })}
    </Stack>
  );
}
