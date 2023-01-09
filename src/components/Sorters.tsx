import React from "react";
import { Row } from "react-bootstrap";
import { Sorter } from "../interfaces/Sorter";

interface Props<T extends Record<PropertyKey, any>> {
  dataSource: Array<T>;
  setSortProperty(sortProperty: Sorter<T>): void;
}

export default function Sorters<T extends Record<PropertyKey, any>>(
  props: Props<T>
) {
  const { dataSource, setSortProperty } = props;
  const object = dataSource.length ? dataSource[0] : {};

  return (
    <Row className="m-3 justify-content-center">
      <label htmlFor="sorters">Sort by</label>
      <select
        id="sorters"
        placeholder="Sort..."
        aria-label="Sort"
        onChange={(event) => {
          const values = event.target.value.split("-");
          if (values.length === 2) {
            setSortProperty({
              property: values[0],
              isDescending: values[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => (
          <React.Fragment key={key}>
            <option key={`${key}-true`} value={`${key}-true`}>
              {key} descending
            </option>
            <option key={`${key}-false`} value={`${key}-false`}>
              {key} ascending
            </option>
          </React.Fragment>
        ))}
      </select>
    </Row>
  );
}
