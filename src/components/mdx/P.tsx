import type { FC } from "react";
import { cn } from "@/lib/utils";

const P: FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={cn("my-5 leading-relaxed", className)}>
      {children}
    </p>
  );
};

export default P;