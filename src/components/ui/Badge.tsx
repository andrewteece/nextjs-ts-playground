import clsx from "clsx";
import * as React from "react";

/** Visual style of the badge. */
export type BadgeVariant = "solid" | "soft" | "outline";
/** Semantic color intent. */
export type BadgeColor =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger";
/** Size of the badge. */
export type BadgeSize = "sm" | "md";

/** Props for the Badge component. */
export type BadgeProps = {
  /** Visual style of the badge. */
  variant?: BadgeVariant;
  /** Semantic color intent. */
  color?: BadgeColor;
  /** Size of the badge. */
  size?: BadgeSize;
  /** Badge content. */
  children: React.ReactNode;
  /** Extra class names to merge. */
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const base =
  "inline-flex items-center rounded-full font-medium whitespace-nowrap";

const sizeClass: Record<BadgeSize, string> = {
  sm: "text-[11px] leading-4 px-2 py-0.5",
  md: "text-xs leading-5 px-2.5 py-0.5",
};

const palette: Record<BadgeVariant, Record<BadgeColor, string>> = {
  solid: {
    neutral:
      "bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900",
    primary: "bg-blue-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-amber-600 text-white",
    danger: "bg-red-600 text-white",
  },
  soft: {
    neutral:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-100",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-200",
    success:
      "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-200",
    warning:
      "bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-200",
    danger: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-200",
  },
  outline: {
    neutral:
      "ring-1 ring-neutral-300 text-neutral-800 dark:ring-neutral-700 dark:text-neutral-100",
    primary: "ring-1 ring-blue-400 text-blue-700 dark:text-blue-200",
    success: "ring-1 ring-green-400 text-green-700 dark:text-green-200",
    warning: "ring-1 ring-amber-400 text-amber-800 dark:text-amber-200",
    danger: "ring-1 ring-red-400 text-red-700 dark:text-red-200",
  },
};

export function Badge({
  variant = "soft",
  color = "neutral",
  size = "md",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      {...rest}
      className={clsx(
        base,
        sizeClass[size],
        palette[variant][color],
        className,
      )}
    >
      {children}
    </span>
  );
}
