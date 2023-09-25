import { Stack, Box } from "@mui/material";
import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";

type channel = {
  id: {
    channelId: string;
  };
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
  statistics: {
    subscriberCount: string;
  };
};
export type video={
  kind: string;
  id:{
    videoId:string;
  };
  snippet: {
    channelId:string;
    channelTitle:string;
    title:string;
    thumbnails:{
      high:{
        url:string;
      }}}
  statistics:{
    viewCount:string;
    likeCount:string;
  }
}


type videosProps = {
  Videos?:video[];
  Channel?:channel[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";}

export const Videos = ({Videos,Channel, direction="row"}:videosProps) => {
  const [channel] = Channel || []


  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="space-evenly" gap={2}>
      { Videos && Videos.map((video:video, index:number) => (
        <Box key={index}>
        <VideoCard Video={video} /></Box>
      ))}
      {Channel && <ChannelCard channelDetail={channel} marginTop="0px" />}
    </Stack>
  )
}
