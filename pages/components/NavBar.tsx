import Link from 'next/link';
import { Box, Tab, Tabs, Typography, styled } from '@mui/material';

const NavBar: React.FC = () => {
  const StyledTypography = styled(Typography)`
    padding: 0.5em;
    font-weight: 600;
    // Any other styles you want to apply
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 80px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Link href="/products">
          <StyledTypography variant="h6">Products</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">SALE</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Inspiration</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Brands</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Outlet</StyledTypography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Shipping</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Returns & Warranty</StyledTypography>
        </Link>
        <Link href="/account/Register">
          <StyledTypography variant="h6">Contact</StyledTypography>
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
