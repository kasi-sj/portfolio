import React from "react";
import { Avatar } from "@nextui-org/react";

export default function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar
        isBordered
        radius="sm"
        color="primary"
        size="sm"
        src="/kasinathan_sj_logo.jpg"
      />
    </div>
  );
}
