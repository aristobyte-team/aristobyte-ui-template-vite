"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons, useMediaQuery } from "@aristobyte-ui/utils";
export const PackagesLink = () => {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <AristoByteUIButton
      type="link"
      target="_blank"
      href="https://www.npmjs.com/~aristobyte_team?activeTab=packages"
      appearance="glowing"
      variant="warning"
      radius="lg"
      size={isMd ? "md" : "sm"}
      icon={{ component: Icons.Package, size: isMd ? 24 : 16 }}
    >
      Packages
    </AristoByteUIButton>
  );
};
