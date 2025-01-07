import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { regionFilterChanged, selectRegion } from "../store/filtersSlice";
import { useMemo } from "react";
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
    newValue: string | null
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
        "hover:bg-dark-light hover:text-white bg-white pl-7 pr-5 py-5 rounded-md w-52 text-left flex justify-between shadow-md dark:bg-dark-light  dark:hover:bg-gray dark:hover:text-dark"
    },
    popup: { className: "bg-white rounded-md w-52 mt-1 dark:bg-dark-light" }
  };
  const optionsProps = {
    root: {
      className:
        "py-4 px-7 rounded-md hover:bg-dark-light hover:text-white dark:bg-dark-light dark:text-white dark:hover:bg-gray dark:hover:text-dark"
    }
  };

  return (
    <div>
      <Select
        value={region}
        placeholder="Filter by Region"
        onChange={handleFilterChanged}
        slotProps={slotProps}
        slots={{
          root: FilterButton
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
    </div>
  );
}

export default FilterByRegion;
