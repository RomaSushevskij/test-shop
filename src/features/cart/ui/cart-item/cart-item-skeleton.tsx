import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListDivider from "@mui/joy/ListDivider";
import Skeleton from "@mui/material/Skeleton";

export const CartItemSkeleton = ({ displayDivider }: { displayDivider: boolean }) => {
  return (
    <div>
      <ListItem>
        <ListItemDecorator>
          <Skeleton variant="circular" width={48} height={48} />
        </ListItemDecorator>
        <ListItemContent sx={{ ml: 2 }}>
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Stack flexGrow={1}>
              <Typography>
                <Skeleton width={"50%"} sx={{ maxWidth: "12.5rem" }} />
              </Typography>
              <Skeleton width={"6.25rem"} height={"2.125rem"} sx={{ borderRadius: "0.75rem" }} />
            </Stack>

            <Typography marginTop={1} variant="h6" fontWeight={"700"} marginLeft={4}>
              <Skeleton width={"4.375rem"} />
            </Typography>
          </Stack>
        </ListItemContent>
      </ListItem>
      {displayDivider && <ListDivider inset={"gutter"} />}
    </div>
  );
};
