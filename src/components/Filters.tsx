import React from 'react';
import { Form, Stack } from 'react-bootstrap';
import { Filter } from '../interfaces/Filter';

interface Props<T extends Record<PropertyKey, any>> {
  dataSource: Array<T>;
  filterProperties: Array<Filter<T>>;
  setFilterProperties(filterProperties: Array<Filter<T>>): void;
}

export default function Filters<T extends Record<PropertyKey, any>>(
  props: Props<T>
) {
  const { dataSource, filterProperties, setFilterProperties } = props;
  const object = dataSource.length ? dataSource[0] : {};

  function onChangeFilter(property: Filter<T>) {
    const propertyMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected
    );
    const fullMatch = filterProperties.some(
      (bookFilterProperty) =>
        bookFilterProperty.property === property.property &&
        bookFilterProperty.isTruthySelected === property.isTruthySelected
    );
    if (fullMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => property.property !== filterProperty.property
        ),
      ]);
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => property.property !== filterProperty.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  }

  return (
    <Stack className="justify-content-center" direction="horizontal">
      {Object.keys(object).map((key) => {
        return (
          <React.Fragment key={key}>
            <Form.Group key={`${key}-true`} className="m-3" controlId={key}>
              <Form.Check
                type="checkbox"
                id={`${key}-true`}
                value={key}
                onChange={() =>
                  onChangeFilter({ property: key, isTruthySelected: true })
                }
                checked={filterProperties.some(
                  ({ property, isTruthySelected }) =>
                    property === key && isTruthySelected
                )}
                label={`${key} is truthy`}
              />
            </Form.Group>
            <Form.Group key={`${key}-false`} className="m-3" controlId={key}>
              <Form.Check
                type="checkbox"
                value={key}
                id={`${key}-false`}
                onChange={() =>
                  onChangeFilter({
                    property: key as any,
                    isTruthySelected: false,
                  })
                }
                checked={filterProperties.some(
                  ({ property, isTruthySelected }) =>
                    property === key && !isTruthySelected
                )}
                label={`${key} is falsy`}
              />
            </Form.Group>
          </React.Fragment>
        );
      })}
    </Stack>
  );
}
