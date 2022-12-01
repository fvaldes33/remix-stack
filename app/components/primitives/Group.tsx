import { classNames } from "~/lib/classNames";

type GroupProps = React.ComponentPropsWithoutRef<"div">;

export default function Group({
  children,
  className = "",
  ...props
}: GroupProps) {
  return (
    <div
      className={classNames("flex flex-row space-x-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
