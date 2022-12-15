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
import React, { useState } from "react";
import { useApp, User } from "../../contexts/AppContext";
import { filterUsers } from "../../utils";

export const Menu = () => {
  const { setGlobalState } = useApp();
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (currentValue: string) => {
    if (currentValue.trim().length === 0) {
      return;
    }

    setGlobalState((prev: { users: User[] }) => ({
      ...prev,
      users: filterUsers(prev, currentValue),
    }));
  };

  return (
    <header
      style={{
        backgroundColor: "#eeeeee",
        paddingInline: "50px",
        paddingBlock: "10px",
        minHeight: "5.5rem",
      }}
    >
      <Grid container spacing={2} alignItems="end">
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <InputLabel id="search">Search</InputLabel>
          <OutlinedInput
            fullWidth
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select id="sort-by" fullWidth>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
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
            <Button onClick={() => handleFilter(search)}>Apply</Button>
            <Button color="secondary">Reset</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </header>
  );
};
