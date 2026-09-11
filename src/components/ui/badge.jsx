import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex cursor-default items-center rounded-lg border px-3 py-1 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-border bg-white/5 text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-glow",
        secondary:
          "border-border bg-secondary/60 text-secondary-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-glow",
        destructive:
          "border-destructive/40 bg-destructive/15 text-destructive hover:-translate-y-0.5 hover:bg-destructive/25 hover:shadow-glow",
        outline:
          "border-border bg-white/[0.03] text-muted hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-glow",
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
