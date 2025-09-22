import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("fill-current", className)}
    >
      <circle cx="50" cy="50" r="10" className="text-primary" />
      <g stroke="hsl(var(--muted-foreground))" strokeWidth="2">
        <line x1="10" y1="50" x2="40" y2="50" />
        <circle cx="10" cy="50" r="2" fill="hsl(var(--muted-foreground))" />

        <line x1="15" y1="35" x2="43" y2="45" />
        <circle cx="15" cy="35" r="2" fill="hsl(var(--muted-foreground))" />

        <line x1="25" y1="20" x2="47" y2="40" />
        <circle cx="25" cy="20" r="2" fill="hsl(var(--muted-foreground))" />

        <line x1="15" y1="65" x2="43" y2="55" />
        <circle cx="15" cy="65" r="2" fill="hsl(var(--muted-foreground))" />

        <line x1="25" y1="80" x2="47" y2="60" />
        <circle cx="25" cy="80" r="2" fill="hsl(var(--muted-foreground))" />
        
        <polyline points="60,35 75,50 60,65" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="70,30 85,50 70,70" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
