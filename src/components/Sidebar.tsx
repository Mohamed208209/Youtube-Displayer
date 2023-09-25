import {Stack} from '@mui/material'
import { categories } from '../utils/constants'

type SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export const Sidebar = ({selectedCategory, setSelectedCategory}: SidebarProps) => {
  return (
    <Stack
     direction="row"
      sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}
     >
       {categories.map((category) => (
           <button type='button' key={category.name} className="category-btn"
             onClick={() => setSelectedCategory(category.name)}
           style={{background: category.name === selectedCategory ? '#581c87' : 'transparent', color: category.name === selectedCategory ? '#67e8f9' : ''}}>
               
              <span> {<category.icon/>}</span>
               <span>{category.name}</span>
           </button>
       ))} 
    </Stack>
  )
}
