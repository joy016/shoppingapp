import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi';
import { Box, Tab, Tabs } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'primary.main' }}>
      <Tabs sx={{ color: 'white' }} centered>
        <Link href="/account/Register">
          <Tab sx={{ color: 'white' }} label="Shop" />
        </Link>
        <Link href="/account/Register">
          <Tab label="Contact Us" />
        </Link>

        <Link href="/account/Register">
          <Tab label="About" />
        </Link>

        <Link href="/account/Register" passHref>
          <Tab icon={<HiShoppingCart />} aria-label="phone" />
        </Link>

        <Link href="/account/Login" passHref>
          <Tab label="Login" component="a" />
        </Link>
        <Link href="/account/Register" passHref>
          <Tab label="Register" component="a" />
        </Link>
      </Tabs>
    </Box>
  );
};

export default NavBar;
