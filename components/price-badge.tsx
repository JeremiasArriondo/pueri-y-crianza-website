import { cn } from "@/lib/utils";

interface PriceBadgeProps {
  price: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showDiscount?: boolean;
  originalPrice?: number;
}

export function PriceBadge({
  price,
  currency = "ARS",
  size = "md",
  className,
  showDiscount = false,
  originalPrice
}: PriceBadgeProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl"
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center">
        <span className={cn("font-bold", sizeClasses[size])}>
          ${price.toFixed(2)}
        </span>
        <span className="text-gray-500 dark:text-gray-400 ml-1 text-xs">
          {currency}
        </span>

        {showDiscount && originalPrice && (
          <span className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {showDiscount && originalPrice && (
        <div className="text-gray-500 dark:text-gray-400 text-sm line-through">
          ${originalPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
}
