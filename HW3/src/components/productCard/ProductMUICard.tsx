import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, styled } from "@mui/material";
import { Product } from "../../data/Product";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const OneLineTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical"
  },
});


const ProductMUICard: React.FC<{ product: Product }> = ({ product }) => {
  const { name, category, image, description, unit, quantity } = product;
  return (
    <Box width={300}>
      <OneLineTooltip title={description}>


        <Card
          sx={{ ":hover": { scale: 1.05 } }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 300 }}
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {category}
              </Typography>
              <Typography
              >
                {quantity} {unit}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </OneLineTooltip>

    </Box>

  );
};

export default ProductMUICard;
