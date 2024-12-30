import React from "react";
import { Form, Row } from "react-bootstrap";
import { Sorter } from "../interfaces/Sorter";

interface Props<T extends Record<PropertyKey, any>> {
  sortKeys: Array<keyof T>;
  setSortProperty(sortProperty: Sorter<T>): void;
}

export function Sorters<T extends Record<PropertyKey, any>>(
  props: Props<T>,
): JSX.Element {
  const { setSortProperty, sortKeys } = props;

  return (
    <Row className="m-3 justify-content-center">
      <Form style={{ width: "20rem" }}>
        <Form.Select
          id="sorters"
          placeholder="Sort..."
          aria-label="Sort"
          onChange={(event): void => {
            const values = event.target.value.split("-");
            if (values.length === 2) {
              setSortProperty({
                property: values[0],
                isDescending: values[1] === "true",
              });
            }
          }}
        >
          {sortKeys
            .map((k) => String(k))
            .map((key) => (
              <React.Fragment key={key}>
                <option key={`${key}-false`} value={`${key}-false`}>
                  {key} ascending
                </option>
                <option key={`${key}-true`} value={`${key}-true`}>
                  {key} descending
                </option>
              </React.Fragment>
            ))}
        </Form.Select>
      </Form>
    </Row>
  );
}
