import { Button } from "@mui/base";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useTheme } from "../ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className="flex items-center gap-5 bg-white dark:bg-dark-light py-4 px-12 text-base rounded tracking-wider font-medium"
    >
      {theme === "light" ? (
        <BedtimeOutlinedIcon />
      ) : (
        <BedtimeIcon sx={{ color: "white" }} />
      )}
      Dark mode
    </Button>
  );
}

export default ThemeToggle;
