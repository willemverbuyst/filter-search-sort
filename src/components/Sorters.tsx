import { Row } from 'react-bootstrap';
import { Property } from '../interfaces/Sorter';

interface Props<T extends Record<PropertyKey, any>> {
  object: T;
  setProperty: (propertyType: Property<T>) => void;
}

export default function Sorters<T extends Record<PropertyKey, any>>(
  props: Props<T>
) {
  const { object, setProperty } = props;
  return (
    <Row style={{ width: '30vw' }} className="m-3 justify-content-center">
      <label htmlFor="sorters">Sort by</label>
      <select
        id="sorters"
        placeholder="Sort..."
        aria-label="Sort"
        onChange={(event) => {
          const values = event.target.value.split('-');
          if (values.length === 2) {
            setProperty({
              property: values[0],
              isDescending: values[1] === 'true',
            });
          }
        }}
      >
        {Object.keys(object).map((key) => (
          <>
            <option key={`${key}-true`} value={`${key}-true`}>
              {key} descending
            </option>
            <option key={`${key}-false`} value={`${key}-false`}>
              {key} ascending
            </option>
          </>
        ))}
      </select>
    </Row>
  );
}
