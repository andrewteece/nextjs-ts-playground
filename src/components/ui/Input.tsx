import { cn } from "@/lib/cn";
import * as React from "react";

// was: export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-9 w-full rounded-xl border border-neutral-300 bg-white px-3 text-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
