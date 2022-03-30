import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css';
const Searchbar=()=>{
    return(
<>
<h1 style={{color:"#67B5E6"}}>Weather App</h1>
<div className='main'>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" style={{color:"green"}}>
        <SearchIcon />
      </IconButton>
   
      
    </Paper>
    </div></>
    )
}
export default Searchbar;