import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div
      className={
        "flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
      }
    >
      {children}
    </div>
  );
}

InputRoot.displayName = "Input.Root";

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

InputIcon.displayName = "Input.Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input
      className="flex-1 bg-transparent outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

Input.displayName = "Input";

export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
};
