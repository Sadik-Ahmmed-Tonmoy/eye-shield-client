import { cn } from "@/lib/utils";
import React from "react";

const MyContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <div className={cn("h-full w-full container mx-auto px-2", className)}>{children}</div>;
};

export default MyContainer;
