import {Link} from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import type { video } from "./Videos"
type videoCardProps = {
    Video:video;
}

export const VideoCard = ({Video}:videoCardProps) => {
  

 
  return (
    <Card sx={{width:{md: "260px", xs: "100%"}, boxShadow: "none", borderRadius: "5px"}}>
      <Link to={`/video/${Video.id.videoId}`}>
       <CardMedia
        component="img" 
       image={Video?.snippet?.thumbnails?.high?.url}
         alt={Video.snippet.title}
          sx={{
            height: "180px",
           
          }}
          />
       </Link>
       <CardContent sx={{height: "100px" , backgroundColor: "#020617"}}>
        <Link to={`/video/${Video.id.videoId}`}>
          <Typography color="#0891b2" fontWeight="bold" variant="subtitle1">
            {Video.snippet.title.slice(0, 60)}...
            </Typography>
        </Link>

        <Link to={`/channel/${Video.snippet.channelId}`}>
          <Typography color="#581c87" fontWeight="bold" variant="h6">
          Channel: {Video.snippet.channelTitle}
            <CheckCircleIcon sx={{fontSize: 12, color: "#155e75", ml: "5px"}}/>
            </Typography>
        </Link>
       </CardContent>
    </Card>
  )
}
