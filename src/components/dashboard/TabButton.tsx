import { cn } from "@/lib/utils";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const TabButton = ({ active, onClick, children }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200",
        active 
          ? "bg-primary text-primary-foreground shadow-lg glow-primary" 
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      )}
    >
      {children}
    </button>
  );
};
