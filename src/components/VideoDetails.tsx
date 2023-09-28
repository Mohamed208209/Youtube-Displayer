import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ReactPlayer from "react-player"
import type { video } from "./Videos"
import { Typography, Box, Stack } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fetchVideos } from "../utils/VideosFetching";
import { Videos } from "./Videos";
import { Loader } from "./Loader"

export const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState<null | video>(null);
  const [videos, setVideos] = useState<null | video[]>(null)
  const { id } = useParams();
 
   
   useEffect(() => {
     fetchVideos(`videos?part=snippet,statistics&id=${id}`).then((data) => {
       setVideoDetail(data.items[0])})
      
       fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
         setVideos(data.items)})

      }, [id])
   if (!videoDetail || !videos) return <Loader />

   const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
   
  
  return (
    <Box minHeight="95vh" >
     <Stack direction={{xs: 'column', md: 'row'}}>
      <Box flex={1}>
        <Box sx={{ width: '100%',
         position: 'sticky',
          top: '86px',
         bgcolor: '#0f172a',
         border: "1px solid #0e7490",
         marginRight: '12px',
         marginLeft: '2.5px',
         borderRadius: '10px',
         }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
           />
           <Typography color="#0891b2" variant="h5" fontWeight="bold" mb={2}>
            {title}
           </Typography>
           <Stack direction="row" alignItems="center" justifyContent="space-between"
           sx={{color: '#0891b2', py:1, px:2}}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant='h6'>
               {channelTitle}
               <CheckCircleIcon sx={{fontSize: 12, color: "#751570", ml: "5px"}}/>
              </Typography>
            </Link>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="body1" sx={{opacity: 0.7}}>
                {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
            </Stack>
           </Stack>
        </Box>
      </Box>
      <Box p={2} py={{md:1, xs: 5}} justifyContent="center" alignItems="center" >
    { videos &&  <Videos Videos={videos} direction="column" />  }  
     </Box>
     </Stack>
    
    </Box>
  )
}
