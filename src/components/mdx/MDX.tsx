import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./Callout";
import { H1, H2, H3, H4 } from "./Headings";
import LI from "./LI";
import Link from "./Link";
import OL from "./OL";
import P from "./P";
import Pre from "./Pre";
import Code from "./Code";
import Span from "./Span";
import UL from "./UL";
import Tweet from "./Tweet";
import type { MDXComponents } from "mdx/types";

const MDX_COMPONENTS: MDXComponents = {
  // basic
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: ({ src, alt, width, height }) => (
    <Image
      src={src as string}
      alt={alt as string}
      width={width as number}
      height={height as number}
    />
  ),

  h1: ({ children }) => <H1>{children}</H1>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  h4: ({ children }) => <H4>{children}</H4>,
  pre: ({ children, className, ...props }) => (
    <Pre {...props} className={className}>
      {children}
    </Pre>
  ),
  code: ({ children, className, ...props }) => (
    <Code {...props} className={className}>
      {children}
    </Code>
  ),
  p: ({ children, className, ...props }) => (
    <P {...props} className={className}>
      {children}
    </P>
  ),
  span: ({ children, className, ...props }) => (
    <Span {...props} className={className}>
      {children}
    </Span>
  ),
  ul: ({ children, className, ...props }) => (
    <UL {...props} className={className}>
      {children}
    </UL>
  ),
  ol: ({ children, className, ...props }) => (
    <OL {...props} className={className}>
      {children}
    </OL>
  ),
  li: ({ children, className, ...props }) => (
    <LI {...props} className={className}>
      {children}
    </LI>
  ),

  // custom
  Callout: ({ children, className, ...props }) => (
    <Callout {...props} className={className}>
      {children}
    </Callout>
  ),
  Tweet: ({ id, ...props }) => <Tweet id={id as string} {...props} />,
};

export default function MDX({ content }: { content: string }) {
  const Component = useMDXComponent(content);
  if (Component) {
    return (
      <div className="text-base">
        <Component components={MDX_COMPONENTS} />
      </div>
    );
  }

  return <div />;
}