
import * as React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center md:h-16 justify-between gap-4 md:gap-2">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-invisaBlue" />
          <span className="font-bold tracking-tight">
            Invisa<span className="text-invisaBlue">Ink</span>
          </span>
        </div>
        <div className="text-center md:text-left text-sm text-muted-foreground">
          <p>Image & Video Protection for the AI Era</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Contact
          </a>
          <span className="text-xs text-muted-foreground">© 2025 InvisaInk</span>
        </div>
      </div>
    </footer>
  );
}
