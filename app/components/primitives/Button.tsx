import { forwardRef } from "react";
import { Loader } from "tabler-icons-react";
import { classNames } from "~/lib/classNames";
import type { PolymorphicRef, PolymorphicComponentProps } from "./types";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, ButtonBaseProps>;

type ButtonComponent = <C extends React.ElementType = "div">(
  props: ButtonProps<C>
) => React.ReactElement | null;

// text-white hover:text-black bg-black hover:bg-white active:scale-95 font-medium text-sm px-5 py-2 border rounded-md border-black transition-all duration-75
const defaultWrapperClass =
  "inline-block group relative h-10 text-sm font-medium overflow-hidden disabled:opacity-50";

const variantClasses = {
  primary: {
    inner: "bg-slate-900 text-white hover:bg-white hover:text-slate-900",
  },
  secondary: {
    inner: "bg-white text-slate-900 hover:bg-slate-900 hover:text-white",
  },
};

const Button: ButtonComponent = forwardRef(function Button<
  C extends React.ElementType = "button"
>(
  {
    component,
    children,
    variant = "primary",
    loading = false,
    leftIcon,
    ...props
  }: ButtonProps<C>,
  ref: PolymorphicRef<C>
) {
  const Component = component || "button";
  const variantClass = variantClasses[variant];

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
      className={classNames(defaultWrapperClass, props.className)}
    >
      <div
        className={classNames(
          "ease h-full w-full px-6 transition-all duration-75 rounded-md border border-slate-800 active:scale-95",
          variantClass.inner
        )}
      >
        <div className="flex h-full w-full items-center">
          {renderLeftSection()}
          <span>{children}</span>
        </div>
      </div>
    </Component>
  );
});
export default Button;
