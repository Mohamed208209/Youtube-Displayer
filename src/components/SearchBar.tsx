import {useState } from "react"
import { useNavigate } from "react-router-dom"
import {Paper, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }

  }
  return (
    <Paper 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '4px solid #155e75',
        pl:1,
        boxShadow: 'none',
        mr: {sm: 5},
        bgcolor: '#ecfeff',
         }}>  
         <IconButton type="submit" sx={{p:"10px",color:"#581c87"}}>
            <SearchIcon />
         </IconButton>
         <input 
         style={{backgroundColor: '#ecfeff', color: '#164e63', height: "30px"}}
        className="search-bar"
       type="text"
        placeholder="Search..."
         value={searchTerm}
         onChange={(event) => setSearchTerm(event.target.value)}
         />
    </Paper>
  )
}
