import { PropsWithChildren } from "react";

import List from "@mui/joy/List";

export const CartItemsContainer = ({ children }: PropsWithChildren) => {
  return (
    <List variant="outlined" sx={{ minWidth: "15rem", borderRadius: "sm" }}>
      {children}
    </List>
  );
};
