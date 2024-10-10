import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcherProps, ThemeSwitcherStyles } from "./ThemeSwitcher.types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitcher = ({
  defaultTheme = "light",
  showSystem = false,
  styles
}: ThemeSwitcherProps) => {
  const [style, setStyle] = useState<ThemeSwitcherStyles>({});

  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    } else {
      return 'system';
    }
  }

  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    const savedTheme = localStorage.getItem("prefers-color-theme");
    if (savedTheme) return savedTheme as "light" | "dark" | "system";
    if(defaultTheme === "system") return getSystemTheme();
    return defaultTheme;
  });

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(systemTheme);
      setTheme(systemTheme);
    } else {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      localStorage.setItem("prefers-color-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    setStyle({
      container: cn("", styles?.container || ""),
      tabs: cn("border w-fit h-fit", styles?.container || ""),
      button: cn("", styles?.button),
      icons: cn("h-[1.2rem] w-[1.2rem]", styles?.icons)
    });
  }, [styles]);

  return (
    <Tabs defaultValue={theme} className={style.container}>
      <TabsList className={style.container}>
        <TabsTrigger value="light" onClick={() => setTheme("light")} className={style.button}>
          <SunIcon className={style.icons} />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")} className={style.button}>
          <MoonIcon className={ `${style.icons} rotate-90 transition-all dark:rotate-0` } />
        </TabsTrigger>

        {showSystem && (
          <TabsTrigger value="system" onClick={() => setTheme("system")} className={style.button}>
            <DesktopIcon className={style.icons} />
          </TabsTrigger>
        )}
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
