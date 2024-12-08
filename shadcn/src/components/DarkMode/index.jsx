import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" ? true : false;

  return (
    <div>
      <Switch className="bg-slate-950"
        id="dark-mode"
        onClick={() => {
          isDark ? setTheme("light") : setTheme("dark");
        }}
        checked={isDark}
      />
    </div>
  );
}
