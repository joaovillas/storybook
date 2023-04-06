import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`rounded-none spacing-inset-lg border-thin bg-neutral-05 border-neutral-04 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
