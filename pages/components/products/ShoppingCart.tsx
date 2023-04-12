import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';

const ShoppingCart: React.FC = () => {
  return (
    <IconButton color="primary" aria-label="add to shopping cart">
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
};

export default ShoppingCart;
