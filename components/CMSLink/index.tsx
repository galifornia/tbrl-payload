import React from "react";
import Link from "next/link";
import { Type as LinkType } from "../../fields/link";

type Props = {
  className?: string;
  href?: string;
  scroll?: boolean;
  children?: React.ReactChild;
} & LinkType;

const CMSLink: React.FC<Props> = ({
  type,
  page,
  url,
  href,
  scroll,
  children,
  className,
}) => {
  const isRelativeURL = url?.indexOf("/") === 0;

  if (type === "page" || isRelativeURL) {
    return (
      <Link href={type === "page" ? `/${page?.slug}` : url} scroll={false}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default CMSLink;
