import { Input } from "@mui/base/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { nameFilterChanged, selectName } from "../store/filtersSlice";
import { ChangeEvent } from "react";

function FilterByName() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const handleFilterChanged = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(nameFilterChanged(e.target!.value));
  };
  return (
    <Input
      value={name}
      onChange={handleFilterChanged}
      className="px-14 lg:px-7 py-7 lg:py-4 bg-white w-full lg:w-1/3 shadow-custom-sm rounded-md dark:bg-dark-light text-2xl lg:text-sm font-light"
      slotProps={{
        input: {
          className: "dark:bg-dark-light dark:placeholder:text-white"
        }
      }}
      aria-label="Search for a country"
      placeholder="Search for a country..."
      startAdornment={
        <SearchIcon
          className="mr-12 lg:mr-6 text-gray dark:text-white text-5xl lg:text-lg "
          sx={{
            width: { xs: "2.5rem", lg: "1.5rem" },
            height: { xs: "2.5rem", lg: "1.5rem" }
          }}
        />
      }
    />
  );
}

export default FilterByName;
