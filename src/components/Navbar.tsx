import {  Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {



  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        height: "8vh",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "#020617",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <img src={logo} alt="logo" height={45} />
      </Link>
      
      <SearchBar />
    </Stack>
  );
};