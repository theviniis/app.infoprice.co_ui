import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import styles from "./label.module.scss";

export type LabelProps = ComponentProps<"label">;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
	return <label ref={ref} className={classNames(styles.label, className)} {...props} />;
});

Label.displayName = "Label";

export { Label };
