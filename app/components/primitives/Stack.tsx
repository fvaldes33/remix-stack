import { classNames } from "~/lib/classNames";

type StackProps = React.ComponentPropsWithoutRef<"div">;

export default function Stack({
  children,
  className = "",
  ...props
}: StackProps) {
  return (
    <div
      className={classNames("flex flex-col space-y-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
