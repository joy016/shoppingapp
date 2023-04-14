import { Box, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SearchProducts from './products/SearchProducts';
import Favorites from './products/Favorites';
import ShoppingCart from './products/ShoppingCart';
import User from './products/User';

const SecondRowNav: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          justifyContent: 'center',
        }}
      >
        <Typography>Yugee and Boki Shop</Typography>
      </Box>
      <Box>
        <SearchProducts />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <User />
        <Favorites />
        <ShoppingCart />
      </Box>
    </Box>
  );
};

export default SecondRowNav;
