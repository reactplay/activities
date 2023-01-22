import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { ToolBarButton } from "@/components/Buttons";

export default function SortButtons({ buttons, selected, onChange }) {
  const [allButtons, setAllButtons] = useState([]);
  useEffect(() => {
    if (buttons.length) {
      allButtons.length = 0;
      buttons.forEach((b) => {
        const b_obj = {
          ...b,
          ...{
            asc: false,
          },
        };
        if (b.field === selected) {
          b.selected = false;
        }
        allButtons.push(b_obj);
      });

      if (selected === undefined) {
        allButtons[0].selected = true;
        setAllButtons([...allButtons]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onButtonClicked = (button) => {
    const new_buttons = [];
    const selectedButton = {};
    allButtons.forEach((b) => {
      if (b.field === button.field) {
        if (b.selected) {
          b.asc = !b.asc;
        } else {
          b.selected = true;
          b.asc = true;
        }
        b.selected = true;
        selectedButton = { ...b };
      } else {
        b.selected = false;
      }
      new_buttons.push({ ...b });
    });
    setAllButtons(new_buttons);

    if (onChange) {
      onChange({ ...selectedButton });
    }
  };

  return (
    <div className="flex">
      {allButtons.map((b, bi) => {
        return (
          <ToolBarButton
            key={bi}
            selected={b.selected ? "1" : "0"}
            handleOnClick={() => onButtonClicked(b)}
            cclas={b.selected ? `text-brand-hightlight` : ""}
          >
            {b.label} {b.asc ? <FiArrowDown /> : <FiArrowUp />}
          </ToolBarButton>
        );
      })}
    </div>
  );
}
