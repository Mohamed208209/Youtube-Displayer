import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChannelDetails } from "./components/ChannelDetails";
import { Navbar } from "./components/Navbar";
import { MainFeed } from "./components/MainFeed";
import { SearchFeed } from "./components/SearchFeed";
import { VideoDetails } from "./components/VideoDetails";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#0f172a", color: "#0891b2" }}>
        <Navbar /> 
      <Routes >
      <Route path="/" element={<MainFeed />} /> 
      <Route path="/video/:id" element={<VideoDetails />} />
      <Route path="/channel/:id" element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      {/* <Route path="/myChannels" element={<Channels />} /> */}

      </Routes>
      </Box>
    </Router>
  );
}

export default App;
