import NextLink from "next/link";
import type { FC } from "react";
import { ArrowUpRight } from "lucide-react";

const Link: FC<React.HTMLProps<HTMLAnchorElement>> = ({
  href = "",
  children,
}) => {
  const isExternalUrl = !(href.startsWith("/") || href.startsWith("#"));

  return (
    <NextLink
      href={href}
      target={isExternalUrl ? "_blank" : undefined}
      rel={isExternalUrl ? "noreferrer" : undefined}
    >
      <span className="inline-flex items-center font-medium underline">
        <span>{children}</span>
        {isExternalUrl && (
          <span className="block w-4">
            <ArrowUpRight className="w-4" />
          </span>
        )}
      </span>
    </NextLink>
  );
};

export default Link;