import classNames from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  content: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "dashed" | "outlined" | "ghost" | "link";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "danger"
    | "warning"
    | "success"
    | "default";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  onClick,
  className,
  disabled,
  variant = "default",
  color = "default",
  size = "md",
}) => {
  const btnClassName = classNames(styles.btn, {
    [styles.btn_primary]: color === "primary",
    [styles.btn_secondary]: color === "secondary",
    [styles.btn_info]: color === "info",
    [styles.btn_danger]: color === "danger",
    [styles.btn_warning]: color === "warning",
    [styles.btn_success]: color === "success",
    [styles.default]: color === "default",
    [styles.btn_sm]: size === "sm",
    [styles.btn_md]: size === "md",
    [styles.btn_lg]: size === "lg",
    [styles.btn_dashed]: variant === "dashed",
    [styles.btn_ghost]: variant === "ghost",
    [styles.btn_outlined]: variant === "outlined",
    [styles.btn_link]: variant === "link",
  });

  return (
    <button
      className={`${className} ${btnClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </button>
  );
};

export default Button;
