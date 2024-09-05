import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import styles from "./input-text.module.scss";

export type InputTextProps = ComponentProps<"input">;

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ className, ...props }, ref) => {
	return <input ref={ref} className={classNames(styles.label, className)} {...props} />;
});

InputText.displayName = "InputText";

export { InputText };
