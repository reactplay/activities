import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ total, pagesize, onChange }) {
  const [current, setCurrent] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(total / pagesize));
    setCurrent(1);
  }, [total]);
  const onButtonClicked = (index) => {
    setCurrent(index);
    invokeChange(index);
  };
  const invokeChange = (index) => {
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => onButtonClicked(current - 1)}
          disabled={current === 1}
          className={current === 1 ? `text-brand-hightlight` : "text-grey-100"}
        >
          <FiChevronLeft />
        </Button>
        <Button className="text-white">
          Page: {current} / {pageCount}
        </Button>
        <Button
          onClick={() => onButtonClicked(current + 1)}
          disabled={current === pageCount}
          className={
            current === pageCount ? `text-brand-hightlight` : "text-grey-100"
          }
        >
          <FiChevronRight />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
