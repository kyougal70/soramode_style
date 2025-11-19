import { Cherry } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Cherry className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold tracking-tight">
        SoraMode Style
      </span>
    </div>
  );
}
