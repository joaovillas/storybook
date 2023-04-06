import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={`text-xs leading-distant font-highlight font-regular text-neutral-02 ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
