import * as React from "react";
import { ToolBarButton } from "@/components/Buttons";

export default function OwnerFilter({ selected, onChange }) {
  return (
    <div className="flex">
      <ToolBarButton
        handleOnClick={() => onChange("all")}
        disabled={selected === "all" || selected === undefined}
      >
        All Ideas
      </ToolBarButton>
      <ToolBarButton
        handleOnClick={() => onChange("me")}
        disabled={selected === "me"}
      >
        My Ideas
      </ToolBarButton>
    </div>
  );
}
