import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import type { channelDetail } from "./ChannelCard"
import type { video } from "./Videos"
import { Videos } from "./Videos"
import { fetchVideos } from "../utils/VideosFetching"
import { Loader } from "./Loader"

export const SearchFeed = () => {
  const [videos, setVideos] = useState<video[] | channelDetail[]>([])
  const { searchTerm } = useParams()
  console.log(videos)

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Results For: <span> {searchTerm}</span>
      </Typography>
      {videos.length === 0 && <Loader />}
      {videos && Array.isArray(videos) ? (
        <Videos Videos={videos as video[]} />
      ) : (
        <Videos Channel={videos as channelDetail[]} />
      )}
    </Box>
  );
}