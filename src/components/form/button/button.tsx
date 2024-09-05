import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import styles from "./button.module.scss";

export type ButtonProps = ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
	return <button ref={ref} className={classNames(styles.button, className)} {...props} />;
});

Button.displayName = "Button";
