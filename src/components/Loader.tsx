import { Box, Typography } from "@mui/material";
export const Loader = () => {
  return (
    <Box
    position="absolute"
    height="100vh"
    width="100vw"
    
    sx={{inset:"30vh"}}
    >
     <img src="../assets/loader.svg" alt="loader" />
     <Typography variant="h2">(Loading)...</Typography>
      </Box>
     )
  
}
