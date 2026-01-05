import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  variant?: "default" | "success" | "danger" | "warning";
  icon?: ReactNode;
  className?: string;
}

export const StatCard = ({ 
  label, 
  value, 
  variant = "default", 
  icon,
  className 
}: StatCardProps) => {
  return (
    <div className={cn(
      "stat-card animate-fade-up",
      variant === "success" && "success",
      variant === "danger" && "danger",
      variant === "warning" && "warning",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
            {label}
          </p>
          <p className={cn(
            "text-4xl font-extrabold mt-2",
            variant === "success" && "text-success",
            variant === "danger" && "text-destructive",
            variant === "warning" && "text-warning",
            variant === "default" && "text-primary"
          )}>
            {value}
          </p>
        </div>
        {icon && (
          <div className={cn(
            "p-3 rounded-xl",
            variant === "success" && "bg-success/10 text-success",
            variant === "danger" && "bg-destructive/10 text-destructive",
            variant === "warning" && "bg-warning/10 text-warning",
            variant === "default" && "bg-primary/10 text-primary"
          )}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
