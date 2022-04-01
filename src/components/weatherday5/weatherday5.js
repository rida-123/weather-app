import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const WeatherDay5=({day5})=>{
   return(
      <>
      <h1 style={{backgroundColor:"#B7E0F2",marginTop:"7px"}}>Day5</h1>
      {
       day5.map((item5)=>{
      return(
<>
     
      
<Card sx={{ maxWidth: 345 }}style={{display:"inline-block",margin:"10px 5px",padding:"5px"}}>
          <CardActionArea>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {item5.temp5}&deg;
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               {item5.name5}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item5.datee5}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
    
      </>
      )
   })
}
   </>
   )}


   
   
   


  


export default WeatherDay5;