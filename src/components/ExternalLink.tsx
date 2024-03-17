import { PropsWithChildren } from "react";

interface Props {
  href: string;
  className?: string;
};

export default function ExternalLink({ href, className, children, ...props}: PropsWithChildren<Props>) {
  return (
    <a 
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}