import { ChangeEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Input from "@mui/joy/Input";
import { useDebounce } from "@/shared/lib/hooks/useDebounce.ts";

export const ProductsSearchFilter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const debouncedInputChangeHandler = useDebounce(onChange, 500);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    debouncedInputChangeHandler(newValue);
  };

  return (
    <Stack component={"label"} flexDirection={"column"} gap={1}>
      <Typography variant={"body2"} fontWeight={"700"}>
        Search
      </Typography>
      <Input
        placeholder={"Search"}
        variant={"outlined"}
        value={internalValue}
        onChange={handleInputChange}
      />
    </Stack>
  );
};
