import {
  ButtonGroup,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Menu = () => {
  return (
    <header
      style={{
        backgroundColor: "#eeeeee",
        paddingInline: "50px",
        paddingBlock: "10px",
        height: "5.5rem",
      }}
    >
      <Grid container spacing={2} alignItems="end">
        <Grid item lg={4} md={4} sm={4}>
          <InputLabel id="search">Search</InputLabel>
          <OutlinedInput
            sx={{ width: "100%" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            label="Sort by"
            style={{ width: "100%" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>

        <Grid item lg={4} md={4} sm={4}>
          <InputLabel
            id="actions"
            sx={{ textAlign: "center", marginBottom: "1rem" }}
          >
            Actions
          </InputLabel>
          <ButtonGroup
            disableElevation
            variant="contained"
            fullWidth
            sx={{ gap: "0.5rem" }}
          >
            <Button>Apply</Button>
            <Button color="secondary">Reset</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </header>
  );
};
