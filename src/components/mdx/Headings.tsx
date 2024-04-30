import { cn } from "@/lib/utils";
import { getNodeText, sluggifyTitle } from "@/lib/contentUtils";

const Heading = (variant: "1" | "2" | "3" | "4") => {
  const Component: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
  }) => {
    const Tag = `h${variant}` as keyof JSX.IntrinsicElements;
    const slug = sluggifyTitle(getNodeText(children));

    return (
      <Tag
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(
          "group mt-8 mb-2 cursor-pointer scroll-mt-24 font-medium",
          {
            "text-3xl font-bold": variant === "1",
            "text-2xl font-semibold": variant === "2",
            "text-xl font-medium": variant === "3",
            "text-lg": variant === "4",
          }
        )}
      >
        <span className="absolute left-[0px] z-10 hidden text-slate-400 lg:group-hover:inline">
          #
        </span>
        {children}
      </Tag>
    );
  };

  return Component;
};

export const H1 = Heading("1");
export const H2 = Heading("2");
export const H3 = Heading("3");
export const H4 = Heading("4");