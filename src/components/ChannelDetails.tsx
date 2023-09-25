import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {Box, Typography} from "@mui/material"
import { Videos } from "./Videos"
import { ChannelCard } from "./ChannelCard"
import { fetchVideos } from "../utils/VideosFetching"
export const ChannelDetails = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)
useEffect(() => {
  fetchVideos(`channels?part=snippet&id=${id}`).then((data) => {
    setChannelDetail(data.items[0])
  })

  fetchVideos(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
    setVideos(data.items)
  })
}, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <Box sx={{
          background: "linear-gradient(90deg, #15803d 30%, #2563eb 100%)",
          zIndex: 10,
          height: '250px'}}/>
         { channelDetail && <ChannelCard marginTop="-100px" channelDetail={channelDetail} /> } 
      </Box>
      <Box display="flex"
       justifyContent="center"
        width="80%"
        position="relative"
        left="9%"
        borderRadius="30px"
        mb="20px"
        sx={{
          background: "linear-gradient(90deg, #15803d 30%, #2563eb 100%)"
        }}
        
         >
      <Typography color="#083344"
       variant="h4" fontWeight="bold"
        p={2} 
       
        >Videos</Typography>
      </Box>
      <Box p={2} display="flex" sx={{mr: {sm: '100px'}}} >
         <Videos Videos={videos} />
      </Box>
    </Box>
  )
}
