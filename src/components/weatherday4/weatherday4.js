import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const WeatherDay4=({day4})=>{
   return(
      <>
      <h1 style={{backgroundColor:"#B7E0F2",marginTop:"7px"}}>Day4</h1>
      {
       day4.map((item4)=>{
      return(
<>
     
      
<Card sx={{ maxWidth: 345 }}style={{display:"inline-block",margin:"10px 5px",padding:"5px"}}>
          <CardActionArea>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {item4.temp4}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               {item4.name4}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item4.datee4}
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


   
   
   


  


export default WeatherDay4;