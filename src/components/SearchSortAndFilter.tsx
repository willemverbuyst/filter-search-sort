import { useCallback, useState } from "react";
import { Row } from "react-bootstrap";

import { genericFilter, genericSearch, genericSort } from "../business";
import { Filter, PropsWithChildrenFunction, Sorter } from "../interfaces";
import { Filters } from "./Filters";
import { SearchInput } from "./SearchInput";
import { Sorters } from "./Sorters";

interface Props<T extends Record<PropertyKey, any>> {
  dataSource: Array<T>;
  filterKeys: Array<keyof T>;
  sortKeys: Array<keyof T>;
  searchProperties: Array<keyof T>;
  initialSortProperty: Sorter<T>;
  initialSearchQuery: string;
  initialFilterProperties: Array<Filter<T>>;
}

interface SearchSortAndFilterState<T extends Record<PropertyKey, any>> {
  searchQuery: string;
  sortProperty: Sorter<T>;
  filterProperties: Array<Filter<T>>;
}

export function SearchSortAndFilter<T extends Record<PropertyKey, any>>(
  props: PropsWithChildrenFunction<Props<T>, T>,
): JSX.Element {
  const {
    dataSource,
    filterKeys,
    sortKeys,
    initialFilterProperties,
    initialSearchQuery,
    initialSortProperty,
    searchProperties,
    children,
  } = props;
  const [searchSortAndFilterState, setSearchSortAndFilterState] = useState<
    SearchSortAndFilterState<T>
  >({
    searchQuery: initialSearchQuery,
    sortProperty: initialSortProperty,
    filterProperties: initialFilterProperties,
  });
  const { searchQuery, sortProperty, filterProperties } =
    searchSortAndFilterState;

  return (
    <Row className="m-3 justify-content-center align-self-start">
      <SearchInput
        searchQuery={initialSearchQuery}
        setSearchQuery={useCallback(
          (searchQuery) =>
            setSearchSortAndFilterState((prev) => ({
              ...prev,
              searchQuery,
            })),
          [],
        )}
      />
      <Sorters
        sortKeys={sortKeys}
        setSortProperty={(sortProperty): void => {
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            sortProperty,
          });
        }}
      />
      <Filters
        filterKeys={filterKeys}
        filterProperties={filterProperties}
        setFilterProperties={(filterProperties): void => {
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            filterProperties,
          });
        }}
      />
      {children &&
        dataSource
          .filter((a) => genericSearch(a, searchProperties, searchQuery, false))
          .sort((a, b) => genericSort(a, b, sortProperty))
          .filter((a) => genericFilter(a, filterProperties))
          .map((d) => children(d))}
    </Row>
  );
}
