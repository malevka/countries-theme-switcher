import { Button } from "@mui/base";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useTheme } from "../ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className="flex items-center gap-5 lg:gap-2 bg-white dark:bg-dark-light py-4  text-2xl lg:text-base rounded tracking-normal font-normal"
    >
      {theme === "light" ? (
        <BedtimeOutlinedIcon />
      ) : (
        <BedtimeIcon sx={{ color: "white" }} />
      )}
      Dark Mode
    </Button>
  );
}

export default ThemeToggle;
