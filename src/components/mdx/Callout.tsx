import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AlertOctagon, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const Callout: React.FC<{
  children: ReactNode;
  className?: string | "";
  variant: "info" | "success" | "warning" | "danger";
}> = ({ children, variant, className }) => {
  return (
    <div
      className={cn(`flex space-x-2 rounded-md border pr-4`, className, {
        "border-blue-500 bg-blue-100": variant === "info",
        "border-green-500 bg-green-100": variant === "success",
        "border-yellow-500 bg-yellow-100": variant === "warning",
        "border-red-500 bg-red-100": variant === "danger",
      })}
    >
      <div
        className={cn(
          "ml-3 mt-4 flex h-full shrink-0 items-center justify-center"
        )}
      >
        {variant === "warning" && (
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
        )}
        {variant === "danger" && (
          <AlertOctagon className="h-5 w-5 text-red-600" />
        )}
        {variant === "success" && (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        )}
        {variant === "info" && <Info className="h-5 w-5 text-blue-600" />}
      </div>
      <div
        className={cn("prose py-3", {
          "text-blue-900": variant === "info",
          "text-green-900": variant === "success",
          "text-yellow-900": variant === "warning",
          "text-red-900": variant === "danger",
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Callout;