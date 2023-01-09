import { useState } from "react";
import { Row } from "react-bootstrap";
import { filter } from "../business/filter";
import { search } from "../business/search";
import { sort } from "../business/sort";
import { Filter } from "../interfaces/Filter";
import { Sorter } from "../interfaces/Sorter";
import Filters from "./Filters";
import SearchInput from "./SearchInput";
import Sorters from "./Sorters";
import { PropsWithChildrenFunction } from "./types/PropsWithChildrenFunction";

interface Props<T extends Record<PropertyKey, any>> {
  title: string;
  dataSource: Array<T>;
  filterKeys: Array<keyof T>;
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

export default function SearchSortAndFilter<T extends Record<PropertyKey, any>>(
  props: PropsWithChildrenFunction<Props<T>, T>
) {
  const {
    title,
    dataSource,
    filterKeys,
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
      <h1>{title}</h1>
      <SearchInput
        searchQuery={initialSearchQuery}
        setSearchQuery={(searchQuery) =>
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            searchQuery,
          })
        }
      />
      <Sorters
        dataSource={dataSource}
        setSortProperty={(sortProperty) => {
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            sortProperty,
          });
        }}
      />
      <Filters
        filterKeys={filterKeys}
        filterProperties={filterProperties}
        setFilterProperties={(filterProperties) => {
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            filterProperties,
          });
        }}
      />
      {children &&
        dataSource
          .filter((a) => search(a, searchProperties, searchQuery, false))
          .sort((a, b) => sort(a, b, sortProperty))
          .filter((a) => filter(a, filterProperties))
          .map((d) => children(d))}
    </Row>
  );
}
