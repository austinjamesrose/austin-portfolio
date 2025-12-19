import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`max-w-[1200px] mx-auto px-6 ${className}`}>
      {children}
    </Component>
  );
}
