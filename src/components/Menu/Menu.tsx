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
import { filterUsers, sortUsers } from "../../utils";

interface Props {
  searchValue: string;
  sortValue: string;
}

export const Menu = () => {
  const { setGlobalState } = useApp();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSortValue(e.target.value);
  };

  const handleFilterAndSort = ({ searchValue, sortValue}: Props) => {
    if (searchValue.trim().length === 0 && sortValue.length === 0) {
      setGlobalState((prev) => ({
        ...prev,
        filteredUsers: prev.users,
      }));
      return;
    }

    setGlobalState((prev) => ({
      ...prev,
      filteredUsers: sortUsers(filterUsers(prev.users, searchValue), sortValue),
    }));
  };

  const handleReset = () => {
    setGlobalState((prev) => ({
      ...prev,
      filteredUsers: prev.users,
    }));

    setSearchValue("");
    setSortValue("")
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
            value={searchValue}
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            id="sort-by"
            fullWidth
            onChange={handleSelectChange}
            value={sortValue}
          >
            <MenuItem value="login">name</MenuItem>
            <MenuItem value="id">id</MenuItem>
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
            <Button onClick={() => handleFilterAndSort({ searchValue, sortValue })}>
              Apply
            </Button>
            <Button color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </header>
  );
};
