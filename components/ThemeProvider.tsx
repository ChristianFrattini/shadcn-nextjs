"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvide } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvide {...props}>{children}</NextThemesProvide>;
}
