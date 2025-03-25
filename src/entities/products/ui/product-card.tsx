import { ReactElement } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";

import { TProduct } from "../model/types";
import s from "./product-card.module.css";
import { formatToCurrency } from "@/shared/lib/format-to-currency.ts";

export const ProductCard = ({
  product,
  addToCartSlot,
}: {
  product: TProduct;
  addToCartSlot: ReactElement;
}) => {
  const { title, image, description, category, rating, price } = product;

  return (
    <Card>
      <CardMedia sx={{ width: "100%", aspectRatio: 16 / 9 }} image={image} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={`${s.title} ${s.multi_line_ellipsis}`}
        >
          {title}
        </Typography>
        <Chip label={category} size="small" sx={{ mb: 1 }} />
        <Typography variant="body2" className={`${s.description} ${s.multi_line_ellipsis}`}>
          {description}
        </Typography>
        <Rating
          sx={{ mt: 2 }}
          value={rating.rate}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Typography
          marginTop={1}
          variant="h5"
          fontWeight={"700"}
          className={`${s.title} ${s.multi_line_ellipsis}`}
        >
          {formatToCurrency(price, "EUR")}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>{addToCartSlot}</CardActions>
    </Card>
  );
};
