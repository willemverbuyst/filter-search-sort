import { Form, Stack } from 'react-bootstrap';
import { Filter } from '../interfaces/Filter';

interface Props<T extends Record<PropertyKey, any>> {
  object: T;
  properties: Array<Filter<T>>;
  onChangeFilter: (property: Filter<T>) => void;
}

export default function Filters<T extends Record<PropertyKey, any>>(
  props: Props<T>
) {
  const { object, properties, onChangeFilter } = props;
  return (
    <Stack className="justify-content-center" direction="horizontal">
      {Object.keys(object).map((key) => {
        return (
          <>
            <Form.Group key={key} className="m-3" controlId={key}>
              <Form.Check
                type="checkbox"
                id={`${key}-true`}
                value={key}
                onChange={() =>
                  onChangeFilter({ property: key, isTruthySelected: true })
                }
                checked={properties.some(
                  ({ property, isTruthySelected }) =>
                    property === key && isTruthySelected
                )}
                label={`${key} is truthy`}
              />
            </Form.Group>
            <Form.Group key={key} className="m-3" controlId={key}>
              <Form.Check
                type="checkbox"
                value={key}
                id={`${key}-false`}
                onChange={() =>
                  onChangeFilter({ property: key, isTruthySelected: false })
                }
                checked={properties.some(
                  ({ property, isTruthySelected }) =>
                    property === key && !isTruthySelected
                )}
                label={`${key} is falsy`}
              />
            </Form.Group>
          </>
        );
      })}
    </Stack>
  );
}
