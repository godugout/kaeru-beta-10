
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 kaeru-ease kaeru-duration-base",
  {
    variants: {
      variant: {
        // Legacy shadcn variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "border border-foreground bg-transparent text-foreground hover:bg-foreground/10 rounded-none text-[var(--text-sm)] hover:scale-[1.02]",
        ghost: "bg-transparent text-foreground hover:bg-foreground/5 rounded-none text-[var(--text-sm)] hover:scale-[1.02]",
        link: "text-primary underline-offset-4 hover:underline",
        
        // KAERU Dark Luxury Variants
        primary: "kaeru-button-glow text-kaeru-black font-semibold rounded-none border-0 text-[var(--text-sm)] hover:scale-[1.02]",
        
        // KAERU-specific variants
        gold: "kaeru-button-glow text-kaeru-black font-semibold rounded-none border-0 text-[var(--text-sm)] hover:scale-[1.02]",
        goldOutline: "border-2 border-kaeru-gold bg-transparent text-kaeru-gold hover:bg-kaeru-gold/10 rounded-none text-[var(--text-sm)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
      },
      size: {
        default: "h-12 px-6 py-3 text-[var(--text-sm)]",
        sm: "h-10 px-4 py-2 text-[var(--text-xs)]",
        lg: "h-14 px-8 py-4 text-[var(--text-base)]",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  variant?: 
    | "default" 
    | "destructive" 
    | "outline" 
    | "secondary" 
    | "ghost" 
    | "link" 
    | "primary" 
    | "gold" 
    | "goldOutline"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
