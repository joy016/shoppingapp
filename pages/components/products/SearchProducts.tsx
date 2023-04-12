import {
  Stack,
  Autocomplete,
  TextField,
  InputAdornment,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const SearchProducts: React.FC = () => {
  const CustomTextField = styled(TextField)({
    borderRadius: '20%',
    width: '50rem',
  });
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            className="inputRounded"
            {...params}
            label="Search Products"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchProducts;
