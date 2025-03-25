import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import s from "./product-card.module.css";

export const ProductCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", aspectRatio: 16 / 9, minHeight: "12rem" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          <Skeleton />
        </Typography>
        <Skeleton width={"40%"} height={"2.125rem"} sx={{ borderRadius: "0.75rem" }} />
        <Typography variant="body2">
          <Skeleton />
        </Typography>
        <Typography variant="body2" className={`${s.description} ${s.multi_line_ellipsis}`}>
          <Skeleton width={"70%"} />
        </Typography>

        <Skeleton height={"2.5rem"} width={"35%"} sx={{ mt: 4 }} />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Skeleton width={"9rem"} height={"3rem"} />
      </CardActions>
    </Card>
  );
};
