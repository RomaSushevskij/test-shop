"use client";

import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import { AppBar } from "./app-bar";
import { AppMain } from "./app-main";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <AppBar />
      <AppMain>{children}</AppMain>
    </Box>
  );
};
