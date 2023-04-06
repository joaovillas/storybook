import React from "react";

interface Subtitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Subtitle: React.FC<Subtitle> = ({ children, className, ...props }) => {
  return (
    <h6
      {...props}
      className={`text-md leading-medium font-highlight font-medium text-neutral-02 ${className}`}
    >
      {children}
    </h6>
  );
};

export default Subtitle;
