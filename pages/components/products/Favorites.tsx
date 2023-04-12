import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Favorites: React.FC = () => {
  return (
    <IconButton color="primary" aria-label="add to shopping cart">
      <FavoriteBorderOutlinedIcon />
    </IconButton>
  );
};

export default Favorites;
