import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import 'weather-icons/css/weather-icons.css'
import { useState,useEffect } from 'react';

const WeatherDay1=({day1})=>{
   
   return(
      <>
     
      <h1 style={{backgroundColor:"#B7E0F2",marginTop:"7px"}}>Day1</h1>
      {
       
       day1.map((item)=>{
       
      return(
         <>
  
        
      
            <Card sx={{ maxWidth: 345 }}style={{display:"inline-block",margin:"10px 5px",padding:"5px"}}>
          <CardActionArea>
             
          
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {item.temp}&deg;
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.datee}
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


   
   
   


  


export default WeatherDay1;