import { getClassNames, type BaseButtonProps } from "./Button";

type LinkButtonProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"a">, "color">;

export default function LinkButton({ className, ...props }: LinkButtonProps) {
  className = getClassNames(props);

  return <a className={className} {...props} />;
}
