import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const ShoppingCart: React.FC = () => {
  return (
    <IconButton color="primary" aria-label="add to shopping cart">
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCart;
