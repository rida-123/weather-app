import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Stack from '@mui/material/Stack';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
const WeatherData=()=>{
    return (
        <>
        
        <div className="main1">
            <center>
        <Card sx={{ maxWidth: 500,marginTop:5 ,paddingBottom:3}} style={{borderRadius: "20px"}}>
      <CardMedia
        component="img"
        height="140"
        image="weather.jpg"
    
      />
      <CardContent>
  
        <Typography gutterBottom variant="h5" component="div">
        <WbSunnyIcon style={{fontSize:"90px",marginTop:"5px"}}/>
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:"20px"}}>
      <Grid container spacing={2} columns={18} >
        <Grid item xs={9} style={{backgroundColor:"black", color:"white" ,padding:'5px'}}>
        <h1>25.52&deg;</h1>
        </Grid>
        <Grid item xs={9} style={{color:"black" ,padding:'5px',backgroundColor:"#B7E0F2"}}>
<h1>Clouds</h1>
<h4>Faisalabad, Pakistan</h4>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1, marginTop:2}}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={3}>
        <Stack direction="row" alignItems="center" gap={1}>
          <WbSunnyIcon style={{color:"#B7E0F2"}}/>
          <Typography variant="body1">Sunny</Typography>
        
        </Stack>
        </Grid>
        <Grid item xs={3}>
        <Stack direction="row" alignItems="center" gap={1}>
          <WbSunnyIcon style={{color:"#B7E0F2"}}/>
          <Typography variant="body1">Sunny</Typography>
        
        </Stack> 
        </Grid>
        <Grid item xs={3}>
        <Stack direction="row" alignItems="center" gap={1}>
          <WbSunnyIcon style={{color:"#B7E0F2"}}/>
          <Typography variant="body1">Sunny</Typography>
        
        </Stack>
        </Grid>
        <Grid item xs={3}>
        <Stack direction="row" alignItems="center" gap={1}>
          <WbSunnyIcon style={{color:"#B7E0F2"}}/>
          <Typography variant="body1">Sunny</Typography>
        
        </Stack>
        </Grid>
      </Grid>
    </Box>
     
      </CardContent>
 
    </Card>
    </center>
        </div>
        </>
    )
}
export default WeatherData;