import { SelectRootSlotProps } from "@mui/base";
import { forwardRef } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default forwardRef(function Button<
  TValue extends object,
  Multiple extends boolean
>(
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
