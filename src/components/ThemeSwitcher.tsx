// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return <Switch/>

  return (
    <div>


      <Switch isSelected={theme === "dark" ? true : false}
      onValueChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  )
};