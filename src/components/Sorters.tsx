import { ReactNode, useState } from 'react';
import { Row } from 'react-bootstrap';
import { sort } from '../business/sort';
import { Sorter } from '../interfaces/Sorter';

type PropsWithChildrenFunction<P, T> = P & {
  children?(item: T): ReactNode;
};

interface Props<T extends Record<PropertyKey, any>> {
  dataSource: Array<T>;
  initialSortProperty: keyof T;
}

export default function Sorters<T extends Record<PropertyKey, any>>(
  props: PropsWithChildrenFunction<Props<T>, T>
) {
  const { dataSource, children, initialSortProperty } = props;
  const [sortProperty, setSortProperty] = useState<Sorter<T>>({
    property: initialSortProperty,
    isDescending: true,
  });
  const object = dataSource.length ? dataSource[0] : {};

  return (
    <Row className="m-3 justify-content-center">
      <label htmlFor="sorters">Sort by</label>
      <select
        id="sorters"
        placeholder="Sort..."
        aria-label="Sort"
        onChange={(event) => {
          const values = event.target.value.split('-');
          if (values.length === 2) {
            setSortProperty({
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

      {children &&
        dataSource
          .sort((a, b) => sort(a, b, sortProperty))
          .map((d) => children(d))}
    </Row>
  );
}
