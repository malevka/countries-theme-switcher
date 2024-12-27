import { Select, SelectRootSlotProps } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { regionFilterChanged, selectRegion } from "../store/filtersSlice";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { forwardRef } from "react";

function FilterByRegion({ regions }: { regions: string[] }) {
  const ALL_COUNTRIES = "All";

  const sortedRegions = [...regions].sort();
  const region = useAppSelector(selectRegion);
  const dispatch = useAppDispatch();
  const handleFilterChanged = (newValue: string | null) => {
    if (newValue === ALL_COUNTRIES) {
      dispatch(regionFilterChanged(null));
      return;
    }
    dispatch(regionFilterChanged(newValue));
  };

  const Button = forwardRef(function Button<TValue extends object, Multiple extends boolean>(
    props: SelectRootSlotProps<TValue, Multiple>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <ExpandMoreRoundedIcon />
      </button>
    );
  });

  const slotProps = {
    root: { className: "hover:bg-gray-200 bg-white pl-7 pr-5 py-5 rounded-md w-52 text-left flex justify-between shadow-md" },
    popup: { className: "bg-white rounded-md w-52 mt-1" }
  };
  const optionsProps = {
    root: { className: "py-4 px-7 rounded-md hover:bg-gray-200 " }
  };

  return (
    <div>
      <Select
        value={region}
        placeholder="Filter by Region"
        onChange={(_, newValue) => handleFilterChanged(newValue)}
        slotProps={slotProps}
        slots={{
          root: Button
        }}
      >
        <Option key={ALL_COUNTRIES} value={ALL_COUNTRIES} slotProps={optionsProps}>
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
