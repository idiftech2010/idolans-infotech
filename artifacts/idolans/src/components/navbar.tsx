import React from "react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Idolans Info-Tech" className="h-12 w-12 rounded-md object-contain" />
          <span className="font-semibold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
            Idolans Info-Tech
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="#products" className="text-sm font-medium text-white hover:text-primary transition-colors">Products</a>
        <a href="#solutions" className="text-sm font-medium text-white hover:text-primary transition-colors">Solutions</a>
        <a href="#pricing" className="text-sm font-medium text-white hover:text-primary transition-colors">Pricing</a>
        <a href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">About</a>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-9 h-9 text-muted-foreground hover:text-foreground"
        >
          {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="default" className="hidden sm:inline-flex" asChild>
          <a href="#request-demo">Get Started</a>
        </Button>
      </div>
    </nav>
  );
}
