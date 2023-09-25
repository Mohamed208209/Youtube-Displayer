import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    
    url: BASE_URL,
    params: {
    
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchVideos = async (url: string) => {
   const {data} =   await axios.get(`${BASE_URL}/${url}`, options)
    
     return data;
  }