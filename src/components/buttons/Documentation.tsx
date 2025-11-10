"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons, useMediaQuery } from "@aristobyte-ui/utils";
export const DocumentationLink = () => {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <AristoByteUIButton
      type="link"
      target="_blank"
      href="https://ui.aristobyte.com"
      appearance="glowing"
      variant="warning"
      radius="lg"
      size={isMd ? "md" : "sm"}
      icon={{ component: Icons.Components, size: isMd ? 24 : 16 }}
    >
      Documentation
    </AristoByteUIButton>
  );
};
