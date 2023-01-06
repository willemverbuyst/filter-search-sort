import { Row } from 'react-bootstrap';

interface Props<T extends Record<PropertyKey, any>> {
  object: T;
  setProperty: (key: keyof T) => void;
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
        onChange={(event) => setProperty(event.target.value)}
      >
        {Object.keys(object).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </Row>
  );
}
