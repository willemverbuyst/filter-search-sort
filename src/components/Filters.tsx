import React from "react";
import { Form, Stack } from "react-bootstrap";

import { Filter } from "../interfaces";

interface Props<T extends Record<PropertyKey, any>> {
  filterKeys: Array<keyof T>;
  filterProperties: Array<Filter<T>>;
  setFilterProperties(filterProperties: Array<Filter<T>>): void;
}

export function Filters<T extends Record<PropertyKey, any>>(
  props: Props<T>
): JSX.Element {
  const { filterKeys, filterProperties, setFilterProperties } = props;

  function onChangeFilter(property: Filter<T>): void {
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
      {filterKeys
        .filter((k): k is string => !!k)
        .map((key) => {
          return (
            <React.Fragment key={key}>
              <Form.Group key={`${key}-true`} className="m-3" controlId={key}>
                <Form.Check
                  type="checkbox"
                  id={`${key}-true`}
                  value={key}
                  onChange={(): void =>
                    onChangeFilter({ property: key, isTruthySelected: true })
                  }
                  checked={filterProperties.some(
                    ({ property, isTruthySelected }) =>
                      property === key && isTruthySelected
                  )}
                  label={key}
                />
              </Form.Group>
              <Form.Group key={`${key}-false`} className="m-3" controlId={key}>
                <Form.Check
                  type="checkbox"
                  value={key}
                  id={`${key}-false`}
                  onChange={(): void =>
                    onChangeFilter({
                      property: key as any,
                      isTruthySelected: false,
                    })
                  }
                  checked={filterProperties.some(
                    ({ property, isTruthySelected }) =>
                      property === key && !isTruthySelected
                  )}
                  label={`not ${key}`}
                />
              </Form.Group>
            </React.Fragment>
          );
        })}
    </Stack>
  );
}
