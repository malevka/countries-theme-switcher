import { Input } from "@mui/base/Input";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";
import { nameFilterChanged, selectName } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function FilterByName() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const handleFilterChanged = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(nameFilterChanged(e.target!.value));
  };
  return (
    <Input
      value={name}
      onChange={handleFilterChanged}
      className="flex w-full rounded-md bg-white px-5 py-7 font-light shadow-custom-sm dark:bg-dark-light sm:px-14 sm:text-2xl lg:w-1/3 lg:px-7 lg:py-4 lg:text-sm"
      slotProps={{
        input: {
          className: "dark:bg-dark-light dark:placeholder:text-white",
        },
      }}
      aria-label="Search for a country"
      placeholder="Search for a country..."
      startAdornment={
        <SearchIcon
          className="mr-4 text-5xl text-gray dark:text-white sm:mr-12 lg:mr-6 lg:text-lg"
          sx={{
            width: { sm: "2.5rem", lg: "1.5rem" },
            height: { sm: "2.5rem", lg: "1.5rem" },
          }}
        />
      }
    />
  );
}

export default FilterByName;
