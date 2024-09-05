import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import styles from "./button-primary.module.scss";

export type ButtonPrimaryProps = ComponentProps<"button">;

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(({ className, ...props }, ref) => {
	return <button ref={ref} className={classNames(styles.button, className)} {...props} />;
});

ButtonPrimary.displayName = "Button";
