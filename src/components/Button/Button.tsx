import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 text-black rounded font-semibold w-full duration-100 ease-in-out",
        "hover:bg-cyan-300",
        "focus:ring-2 focus:ring-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
