import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Input from "@mui/joy/Input";
import Slider from "@mui/material/Slider";

import { TProductsFilters } from "../model/types";
import Box from "@mui/material/Box";

export const ProductsPriceFilter = ({
  value,
  onChange,
  min,
  max,
}: {
  value: TProductsFilters["price"];
  onChange: (value: TProductsFilters["price"]) => void;
  min: number;
  max: number;
}) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange({ from: newValue[0], to: newValue[1] });
    }
  };

  const handleTextFieldChange =
    (priceBound: "from" | "to") => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value);

      switch (priceBound) {
        case "from": {
          onChange({ from: newValue, to: value.to });
          break;
        }
        case "to": {
          onChange({ from: value.from, to: newValue });
          break;
        }
      }
    };

  return (
    <Box component={"label"}>
      <Typography variant={"body2"} fontWeight={"700"} marginBottom={1}>
        Price
      </Typography>
      <Stack flexDirection={"row"} gap={2} sx={{ mb: 2 }}>
        <Input value={value.from} onChange={handleTextFieldChange("from")} type={"number"} />
        <Input value={value.to} onChange={handleTextFieldChange("to")} type={"number"} />
      </Stack>

      <Slider
        value={[value.from, value.to]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        disableSwap
      />
    </Box>
  );
};
