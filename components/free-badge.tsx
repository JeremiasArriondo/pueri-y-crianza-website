import { cn } from "@/lib/utils";

interface FreeBadgeProps {
  className?: string;
  variant?: "default" | "outline" | "subtle";
  size?: "sm" | "md" | "lg";
}

export function FreeBadge({
  className,
  variant = "default",
  size = "md"
}: FreeBadgeProps) {
  const variantClasses = {
    default: "bg-green-500 text-white",
    outline:
      "bg-transparent border border-green-500 text-green-600 dark:text-green-400",
    subtle:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      GRATIS
    </span>
  );
}
