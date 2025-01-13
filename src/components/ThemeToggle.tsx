import { Button } from "@mui/base";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useTheme } from "../ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const sizeStyles = {
    width: { xs: "1rem", sm: "1.5rem" },
    height: { xs: "1rem", sm: "1.5rem" },
  };
  return (
    <Button
      onClick={toggleTheme}
      className="transition-bg flex items-center gap-1 rounded bg-white py-4 text-base font-normal tracking-normal dark:bg-dark-light sm:gap-5 sm:text-2xl lg:gap-2 lg:text-base"
    >
      {theme === "light" ? (
        <BedtimeOutlinedIcon sx={sizeStyles} />
      ) : (
        <BedtimeIcon
          sx={{
            color: "white",
            ...sizeStyles,
          }}
        />
      )}
      Dark Mode
    </Button>
  );
}

export default ThemeToggle;
