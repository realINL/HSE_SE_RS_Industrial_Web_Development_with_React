import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, styled } from "@mui/material";
import { Product } from "../../data/Product";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const noImage = '../../assets/inf.png';

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
  const { name, category, image, description, unit, quantity, price } = product;
  const navigate = useNavigate();

  return (
    <Box width={300} onClick={() => navigate(`/product/${product.id}`)}>
      <OneLineTooltip title={description}>


        <Card
          sx={{ boxShadow: 3, borderRadius: 4, ":hover": { scale: 1.05 } }}>
          <CardActionArea>

            <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', fontSize: 18, margin: '8px 8px 8px', textAlign: 'center' }}>
              {name}
            </Typography>

            <CardMedia
              sx={{ height: 300 }}
              image={image || noImage}
              title={name}
            />

            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">

                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {category.name}
                  </Typography>

                  <Typography>
                    {quantity} {unit}
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {price} ₽
                </Typography>

              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </OneLineTooltip>

    </Box>

  );
};

export default ProductMUICard;
