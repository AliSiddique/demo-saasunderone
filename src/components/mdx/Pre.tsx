import type { FC } from "react";
import { cn } from "@/lib/utils";

const Pre: FC<React.HTMLProps<HTMLPreElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <pre
      {...props}
      className={cn(
        "mb-2 mt-4 overflow-auto whitespace-pre rounded-md bg-gray-100 p-4 text-sm",
        className
      )}
    >
      {children}
    </pre>
  );
};

export default Pre;