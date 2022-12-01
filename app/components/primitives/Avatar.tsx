import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef } from "react";
import { classNames } from "~/lib/classNames";
import type {
  GenericSize,
  PolymorphicRef,
  PolymorphicComponentProps,
} from "./types";

export interface AvatarBaseProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: GenericSize;
}

export type AvatarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, AvatarBaseProps>;

type AvatarComponent = <C extends React.ElementType = "div">(
  props: AvatarProps<C>
) => React.ReactElement | null;

const sizeClass = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-16 h-16",
};

const Avatar: AvatarComponent = forwardRef(function Avatar<
  C extends React.ElementType = "div"
>(
  { component, src, alt = "", fallback, size = "md", ...props }: AvatarProps<C>,
  ref: PolymorphicRef<C>
) {
  const Component = component || "div";
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={classNames(
        "flex items-center justify-center overflow-hidden select-none rounded-full bg-white border border-slate-800",
        sizeClass[size],
        props.className ?? ""
      )}
      asChild
    >
      <Component {...props}>
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <AvatarPrimitive.Fallback
          delayMs={600}
          className="h-full w-full flex items-center justify-center bg-white text-slate-800 text-sm leading-none font-semibold"
        >
          {fallback ?? "NA"}
        </AvatarPrimitive.Fallback>
      </Component>
    </AvatarPrimitive.Root>
  );
});
export default Avatar;
