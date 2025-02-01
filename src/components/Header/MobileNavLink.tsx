import { PopoverButton } from "@headlessui/react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function MobileNavLink({ href, children }: Props) {
  return (
    <PopoverButton as={"a"} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}
