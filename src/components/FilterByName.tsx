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
      className="px-7 py-4 bg-white w-full lg:w-96 shadow-md  rounded-md"
      aria-label="Search for a country"
      placeholder="Search for a country..."
      startAdornment={<SearchIcon className="mr-7 text-gray-400 " />}
    />
  );
}

export default FilterByName;
