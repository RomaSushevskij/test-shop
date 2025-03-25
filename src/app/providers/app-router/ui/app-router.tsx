import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import { routeConfig } from "../config/routeConfig.tsx";

export const AppRouter = () => {
  const renderFallback = (
    <Stack justifyContent={"center"} alignItems={"center"} minHeight={"50dvh"}>
      <CircularProgress />
    </Stack>
  );

  return (
    <Suspense fallback={renderFallback}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
