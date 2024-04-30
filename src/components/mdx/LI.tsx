import type { FC } from "react";
import { cn } from "@/lib/utils";

const LI: FC<React.HTMLProps<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li {...props} className={cn("mb-1", className)}>
      {children}
    </li>
  );
};

export default LI;