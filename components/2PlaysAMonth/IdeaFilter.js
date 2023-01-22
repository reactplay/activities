import * as React from "react";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import SortButtons from "@/components/SortButtons";
import OwnerFilter from "@/components/OwnerFilter";
import StatusFilter from "../StatusFilter";

export default function IdeaFilters({
  total,
  pagesize,
  onChange,
  isAuthenticated,
}) {
  const [filter, setFilter] = useState({});

  useEffect(() => {}, [total]);

  const resetFilter = () => {
    filter.sort_col = "created_at";
    filter.sort_asc = true;
    filter.page = 1;
    filter.owner = "all";
    filter.pagesize = pagesize;
    filter.status_filter = undefined;
    return filter;
  };

  const onPageChanged = (index) => {
    const fl = resetFilter();
    fl.page = index;
    setFilter({ ...fl });
    invokeChange(fl);
  };

  const onOwnerChanged = (owner) => {
    const fl = resetFilter();

    fl.owner = owner;
    setFilter({ ...fl });
    invokeChange(fl);
  };

  const onSortChanged = (button) => {
    const fl = resetFilter();
    fl.sort_col = button.field;
    fl.sort_asc = button.asc;
    setFilter({ ...fl });
    invokeChange(fl);
  };

  const onStatusFilterChanged = (status) => {
    const fl = resetFilter();
    fl.status_filter = status;
    setFilter({ ...fl });
    invokeChange(fl);
  };

  const invokeChange = (filter) => {
    if (onChange) {
      onChange(filter);
    }
  };

  return (
    <div className="flex flex-1 z-[9] border-slate-600 pb-3 justify-center">
      {isAuthenticated ? (
        <div className="flex-1">
          <OwnerFilter
            onChange={(r) => onOwnerChanged(r)}
            selected={filter.owner}
          ></OwnerFilter>
        </div>
      ) : null}
      <div className="flex-1 hidden md:block">
        <StatusFilter
          onChange={(r) => onStatusFilterChanged(r)}
          selected={filter.status_filter}
        ></StatusFilter>
      </div>
      <div className="flex border-b-2 ">
        <Pagination
          total={total}
          pagesize={pagesize}
          onChange={(page) => onPageChanged(page)}
        ></Pagination>
        <SortButtons
          onChange={(b) => onSortChanged(b)}
          buttons={[
            { label: "Date", field: "created_at" },
            { label: "Name", field: "title" },
            // { label: 'Popularity', field: 'liked' },
          ]}
        ></SortButtons>
      </div>
    </div>
  );
}
