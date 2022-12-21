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
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useApp } from "../../contexts/AppContext";
import { filterUsers } from "../../utils";

export const Menu = () => {
  const { setGlobalState } = useApp();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSort(e.target.value);
  };

  const handleFilter = (currentValue: string) => {
    if (currentValue.trim().length === 0) {
      setGlobalState((prev) => ({
        ...prev,
        filteredUsers: prev.users,
      }));
      return;
    }

    setGlobalState((prev) => ({
      ...prev,
      filteredUsers: filterUsers(prev.users, currentValue),
    }));
  };

  const handleReset = () => {
    setGlobalState((prev) => ({
      ...prev,
      filteredUsers: prev.users,
    }));

    setSearch("");
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
            value={search}
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            id="sort-by"
            fullWidth
            onChange={handleSelectChange}
            value={sort}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="ID">ID</MenuItem>
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
            <Button color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </header>
  );
};
