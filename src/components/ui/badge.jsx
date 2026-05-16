import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/10 text-primary shadow-sm shadow-primary/10 hover:bg-primary/20",
        secondary:
          "border-secondary/40 bg-secondary/30 text-secondary-foreground hover:bg-secondary/40",
        destructive:
          "border-destructive/40 bg-destructive/15 text-destructive hover:bg-destructive/25",
        outline:
          "border-border/70 bg-white/5 text-foreground hover:border-primary/40 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
