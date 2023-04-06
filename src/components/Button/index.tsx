import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`font-highlight leading-tight border-r-none spacing-squish-xs text-sm font-medium text-neutral-05 bg-brand-primary-03 hover:bg-brand-primary-02 ${className}}`}
    >
      {children}
    </button>
  );
};

export default Button;
