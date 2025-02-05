import clsx from "clsx";
import type { Cta } from "../../../sanity/schemas/types";

export const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-hidden",
};

export const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
    blue: "",
  },
};

export type BaseButtonProps =
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    };

export const SanityStylesToVariantStyles: Record<
  NonNullable<Cta["style"]>,
  BaseButtonProps
> = {
  "solid.slate": {
    variant: "solid",
    color: "slate",
  },
  "solid.blue": {
    variant: "solid",
    color: "blue",
  },
  "solid.white": {
    variant: "solid",
    color: "white",
  },
  "outline.slate": {
    variant: "outline",
    color: "slate",
  },
  "outline.white": {
    variant: "outline",
    color: "white",
  },
  "outline.blue": {
    variant: "outline",
    color: "blue",
  },
};

export const getClassNames = (props?: BaseButtonProps) => {
  const { variant = "solid", color = "slate" } = props || {};
  return clsx(
    baseStyles[variant],
    variant === "outline"
      ? variantStyles.outline[color]
      : variant === "solid"
        ? variantStyles.solid[color]
        : undefined,
  );
};

type ButtonProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, "color">;

export default function Button({ className, ...props }: ButtonProps) {
  className = getClassNames(props);

  return <button className={className} {...props} />;
}
