import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";

export const NotFoundPage = () => {
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
      <Link href={RoutePath.getPath(AppRoutes.MAIN)} sx={{ mt: 2 }}>
        <Button variant="contained">Back Home</Button>
      </Link>
    </Stack>
  );
};
