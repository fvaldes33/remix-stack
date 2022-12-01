import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import type { PolymorphicComponentProps, PolymorphicRef } from "./types";

export interface DropdownMenuBaseProps
  extends DropdownMenuPrimitive.DropdownMenuProps {
  trigger: React.ReactNode;
}

export type DropdownMenuProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, DropdownMenuBaseProps>;

type DropdownMenuComponent = <C extends React.ElementType = "div">(
  props: DropdownMenuProps<C>
) => React.ReactElement | null;

const DropdownMenu: DropdownMenuComponent = forwardRef(function DropdownMenu<
  C extends React.ElementType = "div"
>(
  { trigger, children, ...props }: DropdownMenuProps<C>,
  ref: PolymorphicRef<C>
) {
  return (
    <DropdownMenuPrimitive.Root {...props}>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="w-60 bg-white rounded-md shadow-xl z-50 overflow-hidden border border-gray-100"
          align="end"
        >
          <DropdownMenuPrimitive.Arrow style={{ fill: "white" }} />
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
});

export const DropdownMenuDivider = () => (
  <DropdownMenuPrimitive.Separator className="h-px bg-gray-200" />
);

export const DropdownMenuItem = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <DropdownMenuPrimitive.Item
    asChild
    className="px-4 py-2 bg-white hover:bg-gray-100 outline-none text-sm"
  >
    {children}
  </DropdownMenuPrimitive.Item>
);

export default DropdownMenu;
