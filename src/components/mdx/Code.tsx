import type { FC } from "react";
import { cn } from "@/lib/utils";

const Code: FC<React.HTMLProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <code
      {...props}
      className={cn(
        "rounded-md bg-[#25292e] px-[5px] py-[1px] text-sm text-white",
        className
      )}
    >
      {children}
    </code>
  );
};

export default Code;