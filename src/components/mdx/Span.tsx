import type { FC } from "react";
import { cn } from "@/lib/utils";

const Span: FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span {...props} className={cn("", className)}>
      {children}
    </span>
  );
};

export default Span;