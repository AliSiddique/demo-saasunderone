import type { FC } from "react";
import { cn } from "@/lib/utils";

const UL: FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul {...props} className={cn("list-disc pl-5", className)}>
      {children}
    </ul>
  );
};

export default UL;