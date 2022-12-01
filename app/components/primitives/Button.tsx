import React, { forwardRef } from "react";
import { Loader } from "tabler-icons-react";
import { classNames } from "~/lib/classNames";
import type { PolymorphicRef, PolymorphicComponentProps } from "./types";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, ButtonBaseProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

// text-white hover:text-black bg-black hover:bg-white active:scale-95 font-medium text-sm px-5 py-2 border rounded-md border-black transition-all duration-75
const defaultWrapperClass = [
  "appearance-none",
  "inline-block",
  "relative",
  "font-medium",
  "overflow-hidden",
  "whitespace-nowrap",
  "leading-none",
  "select-none",
  "cursor-pointer",
  "rounded-full",
  "w-auto",
  "ease transition-all duration-150",
  "active:scale-95",
  "focus:outline-none focus:ring-2",
  "disabled:opacity-50",
];

const sizeMap = {
  xs: ["h-7", "px-4", "text-xs"],
  sm: ["h-8", "px-4", "text-sm"],
  md: ["h-10", "px-6", "text-base"],
  lg: ["h-12", "px-8", "text-lg"],
  xl: ["h-14", "px-10", "text-xl"],
};

const variantClasses = {
  primary: [
    "border",
    "border-primary-600",
    "bg-primary-600",
    "text-white",
    "focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50",
    "hover:bg-primary-400 hover:border-primary-400",
  ],
  secondary: [
    "border",
    "border-secondary-600",
    "bg-secondary-600",
    "text-white",
    "focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-secondary-50",
    "hover:bg-secondary-400 hover:border-secondary-400",
  ],
  outline: [
    "border",
    "border-primary-600",
    "text-primary-600",
    "hover:bg-primary-600",
    "hover:text-white",
  ],
};

const Button: ButtonComponent = forwardRef(function Button<
  C extends React.ElementType = "button"
>(
  {
    component,
    children,
    variant = "primary",
    size = "md",
    loading = false,
    leftIcon,
    ...props
  }: ButtonProps<C>,
  ref: PolymorphicRef<C>
) {
  const Component = component || "button";
  const variantClass = variantClasses[variant];
  const sizeClass = sizeMap[size];

  const renderLeftSection = () => {
    if (loading) {
      return <Loader size={16} className="mr-2 animate-spin transition-all" />;
    }

    return leftIcon;
  };

  return (
    <Component
      {...props}
      ref={ref}
      disabled={loading}
      className={classNames(
        defaultWrapperClass.join(" "),
        variantClass.join(" "),
        sizeClass.join(" "),
        props.className
      )}
    >
      <div
        className={classNames("flex items-center justify-center h-full w-full")}
      >
        {renderLeftSection()}
        <span>{children}</span>
      </div>
    </Component>
  );
});
export default Button;
