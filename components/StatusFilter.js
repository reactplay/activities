import * as React from "react";
import { ToolBarButton } from "@/components/Buttons";

const STATUS_MAP = [
  {
    id: undefined,
    label: "All",
  },
  {
    id: "a177589f-25d9-4b67-adbd-310c1a8fc6e4",
    label: "Progressing",
  },
  {
    id: "ec1c0649-3b65-4809-92cf-9c4a6abdff1b",
    label: "Completed",
  },
];
export default function StatusFilter({ onChange, selected }) {
  const [selectedButton, setSelectedButton] = React.useState(undefined);

  React.useEffect(() => {
    setSelectedButton(selected || undefined);
  }, [selected]);

  const onButtonClicked = (type) => {
    setSelectedButton(type);
    if (onChange) {
      onChange(type);
    }
  };

  return (
    <div className="flex">
      {STATUS_MAP.map((sm, smi) => {
        return (
          <ToolBarButton
            key={smi}
            handleOnClick={() => onButtonClicked(sm.id)}
            cclas={selectedButton === sm.id ? `text-brand-hightlight` : ""}
          >
            {" "}
            {sm.label}
          </ToolBarButton>
        );
      })}
    </div>
  );
}
