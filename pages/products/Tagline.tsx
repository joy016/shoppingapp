import { Box, Button, Stack, Typography, styled } from '@mui/material';

const Tagline: React.FC = () => {
  const StyledButton = styled(Button)`
    color: #000;
    border-color: #000;
    width: 20em;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  `;

  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        direction: 'column',
        height: '30rem',
        borderBottom: '0.25px solid gray',
      }}
    >
      <Box
        sx={{
          height: '20rem',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: 'sans-serif' }}>
          Shop your favorite item here
        </Typography>

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            padding: '3% 0',
          }}
        >
          <Typography sx={{ width: '30rem' }} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </Box>

        <Box
          sx={{
            padding: '7% 0',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Stack direction="row" spacing={2}>
            <StyledButton variant="outlined">SHOP SALES</StyledButton>
            <StyledButton variant="outlined">ALL PRODUCTS</StyledButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Tagline;
