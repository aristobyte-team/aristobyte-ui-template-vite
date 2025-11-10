"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons, useMediaQuery } from "@aristobyte-ui/utils";
export const WebsiteLink = () => {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <AristoByteUIButton
      type="link"
      target="_blank"
      href="https://aristobyte.com"
      appearance="glowing"
      variant="error"
      radius="lg"
      size={isMd ? "md" : "sm"}
      icon={{
        component: Icons.ArrowRight,
        size: isMd ? 24 : 16,
        align: "right",
      }}
    >
      Website
    </AristoByteUIButton>
  );
};
