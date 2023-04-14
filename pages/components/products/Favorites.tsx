import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge } from '@mui/material';

const Favorites: React.FC = () => {
  return (
    <IconButton color="primary" aria-label="add to shopping cart">
      <Badge badgeContent={4} color="secondary">
        <FavoriteBorderOutlinedIcon color="action" />
      </Badge>
    </IconButton>
  );
};

export default Favorites;
