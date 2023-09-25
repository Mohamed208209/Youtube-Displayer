

import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

 
export type channelDetail=
  {
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


interface ChannelCardProps {
    channelDetail: channelDetail
    marginTop: string;
  }
  export const ChannelCard: React.FC<ChannelCardProps> = ({ channelDetail, marginTop }) => (
   

    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#0891b2' }}>
        
          <CardMedia
           component="img"
            image={channelDetail?.snippet?.thumbnails?.high?.url }
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
         
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircleIcon sx={{ fontSize: '14px', color: '#22d3ee', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: '#0891b2' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      
    </Box>
    
  );
