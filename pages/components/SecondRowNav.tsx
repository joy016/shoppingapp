import { Stack, Typography } from '@mui/material';
import SearchProducts from './products/SearchProducts';
import Favorites from './products/Favorites';
import ShoppingCart from './products/ShoppingCart';
import User from './products/User';

const SecondRowNav: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <Typography>Yugee and Boki Shop</Typography>
        <SearchProducts />
        <Favorites />
        <ShoppingCart />
        <User />
      </Stack>
    </>
  );
};

export default SecondRowNav;
