import { forwardRef } from "react";
import { Loader } from "tabler-icons-react";
import { classNames } from "~/lib/classNames";
import type { PolymorphicComponentProps, PolymorphicRef } from "./types";

export type InputBaseProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: React.ReactNode;
};

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  InputBaseProps
>;

type InputComponent = <C extends React.ElementType = "input">(
  props: InputProps<C>
) => React.ReactElement | null;

const defaultWrapperClass = [
  "flex items-center",
  "relative",
  "font-medium",
  "whitespace-nowrap",
  "leading-none",
  "rounded-md",
  "w-auto",
  "border border-primary-600",
  "focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2 focus-within:ring-offset-primary-50",
  "ease transition-all duration-150",
  "disabled:opacity-50",
];

const sizeMap = {
  xs: ["h-7", "text-xs"],
  sm: ["h-8", "text-sm"],
  md: ["h-10", "text-base"],
  lg: ["h-12", "text-lg"],
  xl: ["h-14", "text-xl"],
};

const Input: InputComponent = forwardRef(function Input<
  C extends React.ElementType = "input"
>(
  {
    component,
    children,
    label,
    size = "md",
    loading = false,
    leftIcon,
    rightIcon,
    ...props
  }: InputProps<C>,
  ref: PolymorphicRef<C>
) {
  const Component = component || "input";
  const sizeClass = sizeMap[size];

  const renderLeftSection = () => {
    if (!leftIcon && !loading) return null;

    return (
      <span className="pl-4 text-primary-600">
        {loading ? (
          <Loader className="animate-spin transition-all" />
        ) : (
          leftIcon
        )}
      </span>
    );
  };

  const renderRightSection = () => {
    if (!rightIcon) return null;

    return <span className="pr-4 text-primary-600">{rightIcon}</span>;
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-sm font-medium px-1 mb-1">{label}</label>
      )}
      <div
        className={classNames(defaultWrapperClass.join(" "), props.className)}
      >
        {renderLeftSection()}
        <Component
          {...props}
          ref={ref}
          className={classNames(
            "w-full px-4",
            "bg-transparent",
            "border-none",
            "focus:border-none",
            "focus:ring-0",
            "focus:outline-none",
            sizeClass.join(" ")
          )}
        />
        {renderRightSection()}
      </div>
    </div>
  );
});
export default Input;
