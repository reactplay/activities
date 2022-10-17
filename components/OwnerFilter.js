import * as React from "react";
import { ToolBarButton } from "@/components/Buttons";

export default function OwnerFilter({ onChange, selected }) {
  const [selectedButton, setSelectedButton] = React.useState("all");

  React.useEffect(() => {
    setSelectedButton(selected || "all");
  }, [selected]);

  const onButtonClicked = (type) => {
    setSelectedButton(type);
    if (onChange) {
      onChange(type);
    }
  };

  return (
    <div className="flex">
      <ToolBarButton
        handleOnClick={() => onButtonClicked("all")}
        // disabled={selected === "all" || selected === undefined}
        cclas={selectedButton === "all" ? `text-brand-hightlight` : ""}
      >
        All Ideas
      </ToolBarButton>
      <ToolBarButton
        handleOnClick={() => onButtonClicked("me")}
        // disabled={selected === "me"}
        cclas={selectedButton === "me" ? `text-brand-hightlight` : ""}
      >
        My Ideas
      </ToolBarButton>
    </div>
  );
}
