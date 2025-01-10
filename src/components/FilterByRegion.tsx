import { Option } from "@mui/base/Option";
import { Select } from "@mui/base/Select";
import { useMemo } from "react";
import { regionFilterChanged, selectRegion } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FilterButton from "./FilterButton";
interface IProps {
  regions: string[];
}

function FilterByRegion({ regions }: IProps) {
  const ALL_COUNTRIES = "All";

  const sortedRegions = useMemo(() => [...regions].sort(), [regions]);
  const region = useAppSelector(selectRegion);
  const dispatch = useAppDispatch();

  const handleFilterChanged = (
    _: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    newValue: string | null,
  ) => {
    if (newValue === ALL_COUNTRIES) {
      dispatch(regionFilterChanged(null));
      return;
    }
    dispatch(regionFilterChanged(newValue));
  };

  const slotProps = {
    root: {
      className:
        "flex w-60 sm:w-96 items-center justify-between rounded-md bg-white py-7 sm:py-8 pl-6  pr-3 text-left text-lg sm:text-2xl shadow-custom-sm dark:bg-dark-light dark:hover:bg-gray-light dark:hover:text-dark lg:w-52 lg:py-4 lg:text-sm",
    },
    popup: {
      className:
        "mt-1 w-60 sm:w-96 lg:w-52 rounded-md bg-white py-7 lg:py-3 dark:bg-dark-light",
    },
  };
  const optionsProps = {
    root: {
      className:
        "rounded-md px-7 py-2 lg:py-1 text-lg sm:text-2xl lg:text-sm hover:bg-dark-light hover:text-white dark:bg-dark-light dark:text-white dark:hover:bg-gray-light dark:hover:text-dark",
    },
  };

  return (
    <Select
      value={region}
      placeholder="Filter by Region"
      onChange={handleFilterChanged}
      slotProps={slotProps}
      slots={{
        root: FilterButton,
      }}
    >
      <Option
        key={ALL_COUNTRIES}
        value={ALL_COUNTRIES}
        slotProps={optionsProps}
      >
        {ALL_COUNTRIES}
      </Option>
      {sortedRegions.map((region) => (
        <Option key={region} value={region} slotProps={optionsProps}>
          {region}
        </Option>
      ))}
    </Select>
  );
}

export default FilterByRegion;
