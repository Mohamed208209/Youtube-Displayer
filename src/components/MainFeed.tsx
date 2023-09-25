import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar } from "./Sidebar"
import { Videos } from "./Videos"
import { fetchVideos } from "../utils/VideosFetching"
export const MainFeed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory])
     
  return (
    <Stack sx={{
      flexDirection: {sx: 'column', sm: 'row'}}}
    >
      <Box sx={{height:{sx:"auto",md:"92vh"},
      borderRight:"1px solid #164e63",
      px:{xs:0,md:2} }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright"
         variant="body2"
         sx={{mt:1.5}}
        >
         Copyright 2023 Moralist208
        </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
           {selectedCategory}<span> Videos</span>
          </Typography>
          <Videos Videos={videos} />
        </Box>

       
    </Stack>
  )
}
