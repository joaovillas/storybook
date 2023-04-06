import React from "react";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  as?: HeadingTypes;
  className?: string;
  style?: React.CSSProperties;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  as = "h2",
  className,
  ...props
}) => {
  const DEFAULT_CLASS = `text-lg leading-distant font-highlight font-bold text-neutral-01 ${className}`;

  const HeadingMap = {
    h1: (
      <h1 {...props} className={DEFAULT_CLASS}>
        {children}
      </h1>
    ),
    h2: (
      <h2 {...props} className={DEFAULT_CLASS}>
        {children}
      </h2>
    ),
    h3: (
      <h3 {...props} className={DEFAULT_CLASS}>
        {children}
      </h3>
    ),
    h4: (
      <h4 {...props} className={DEFAULT_CLASS}>
        {children}
      </h4>
    ),
    h5: (
      <h5 {...props} className={DEFAULT_CLASS}>
        {children}
      </h5>
    ),
    h6: (
      <h6 {...props} className={DEFAULT_CLASS}>
        {children}
      </h6>
    ),
  };

  return HeadingMap[as];
};

export default Heading;
