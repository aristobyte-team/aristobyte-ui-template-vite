"use client";

import { Label as AristoByteUILabel } from "@aristobyte-ui/label";
import { useMediaQuery } from "@aristobyte-ui/utils";
export const Label = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <AristoByteUILabel
      size={isMd ? "sm" : "xsm"}
      radius="md"
      variant="error"
      text="app/page.tsx"
    />
  );
};
