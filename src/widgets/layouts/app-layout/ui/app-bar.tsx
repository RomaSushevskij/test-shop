import { useNavigate } from "react-router-dom";
import Bar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { useCartContext } from "@/features/cart";
import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import Stack from "@mui/material/Stack";

export const AppBar = () => {
  const navigate = useNavigate();
  const cartContext = useCartContext();

  const handleCartIconBtnClick = () => {
    navigate(RoutePath.getPath(AppRoutes.CART));
  };

  const handleLogoClick = () => {
    navigate(RoutePath.getPath(AppRoutes.MAIN));
  };

  return (
    <Bar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={1}
          role={"link"}
          onClick={handleLogoClick}
          flexGrow={1}
          sx={{ cursor: "pointer" }}
        >
          <LocalMallIcon />
          <Typography textTransform={"uppercase"} variant={"h6"}>
            Test Shop
          </Typography>
        </Stack>

        <IconButton onClick={handleCartIconBtnClick} size="large" color="inherit" role={"link"}>
          <Badge badgeContent={cartContext?.cartItemsCount ?? 0} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </Bar>
  );
};
