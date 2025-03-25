import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

export const AppMain = ({ children }: PropsWithChildren) => {
  return (
    <Box component={"main"} sx={{ p: 3, pt: 12 }}>
      {children}
    </Box>
  );
};
