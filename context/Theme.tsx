'use client'

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProviders } from "next-themes";

const ThemeProvider = ({ children, ...props} : ThemeProviderProps) => {
  return (
    <NextThemesProviders {...props}>
        {children}
    </NextThemesProviders>
  )
}

export default ThemeProvider;