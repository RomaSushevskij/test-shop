import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from "@mui/joy/Avatar";
import ListItemContent from "@mui/joy/ListItemContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ListDivider from "@mui/joy/ListDivider";

import { TProduct } from "@/entities/products";
import { formatToCurrency } from "@/shared/lib/format-to-currency.ts";

import { AddProductToCartBtn } from "../add-product-to-cart-btn/add-product-to-cart-btn.tsx";

export const CartItem = ({
  product,
  displayDivider,
}: {
  product: TProduct;
  displayDivider: boolean;
}) => {
  const { image, title, price, category } = product;

  return (
    <div>
      <ListItem>
        <ListItemDecorator>
          <Avatar size="lg" src={image} />
        </ListItemDecorator>

        <ListItemContent sx={{ ml: 2 }}>
          <Stack
            display={"grid"}
            gridTemplateColumns={"1fr max-content minmax(10rem, min-content)"}
            alignItems={"center"}
          >
            <Stack flexGrow={1}>
              <Typography>{title}</Typography>
              <Chip label={category} size="small" sx={{ my: 1, alignSelf: "start" }} />
            </Stack>

            <AddProductToCartBtn product={product} />

            <Typography
              marginTop={1}
              variant="h6"
              fontWeight={"700"}
              marginLeft={4}
              textAlign={"end"}
            >
              {formatToCurrency(price, "EUR")}
            </Typography>
          </Stack>
        </ListItemContent>
      </ListItem>
      {displayDivider && <ListDivider inset={"gutter"} />}
    </div>
  );
};
