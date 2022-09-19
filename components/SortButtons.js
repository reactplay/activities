import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function SortButtons({ buttons, selected, onChange }) {
  const [allButtons, setAllButtons] = useState([]);
  useEffect(() => {
    if (buttons.length) {
      allButtons.length = 0;
      buttons.forEach((b) => {
        const b_obj = {
          ...b,
          ...{
            asc: true,
          },
        };
        if (b.field === selected) {
          b.selected = true;
        }
        allButtons.push(b_obj);
      });

      if (selected === undefined) {
        allButtons[0].selected = true;
        setAllButtons([...allButtons]);
      }
    }
  }, [buttons]);

  const onButtonClicked = (button) => {
    const new_buttons = [];
    allButtons.forEach((b) => {
      if (b.field === button.field) {
        if (b.selected) {
          b.asc = !b.asc;
        } else {
          b.selected = true;
          b.asc = true;
        }
      } else {
        b.selected = false;
      }
      new_buttons.push({ ...b });
    });
    setAllButtons(new_buttons);
    console.log(new_buttons);

    if (onChange) {
      onChange(new_buttons.filter((b) => b.selected === true)[0]);
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
        {allButtons.map((b, bi) => {
          return (
            <Button
              key={bi}
              onClick={() => onButtonClicked(b)}
              className={b.selected ? `text-brand-hightlight` : "text-grey-100"}
            >
              {b.label} {b.asc ? <FiArrowDown /> : <FiArrowUp />}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
