"use client";

import { cn } from "@/lib/utils";
import { type ReactElement } from "react";

export function List({
  className,
  ...props
}: React.ComponentProps<"ul">): ReactElement {
  return (
    <ul
      className={cn("space-y-2 list-disc list-inside", className)}
      {...props}
    />
  );
}

export function ListItem({
  className,
  ...props
}: React.ComponentProps<"li">): ReactElement {
  return (
    <li className={cn("text-muted-foreground", className)} {...props} />
  );
}
