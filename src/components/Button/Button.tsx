import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild = false }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold w-full duration-100 ease-in-out",
        "hover:bg-cyan-300",
        "focus:ring-2 focus:ring-gray-100"
      )}
    >
      {children}
    </Comp>
  );
}