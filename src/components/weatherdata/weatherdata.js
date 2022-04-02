import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Stack from '@mui/material/Stack';
import 'weather-icons/css/weather-icons.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState,useEffect} from 'react'

const WeatherData=({allInfo})=>{
    const {
        temp,
        main,
        name,
        country,
        sunset,
        humidity,
        pressure,
        speed
    }=allInfo;
    let sec=sunset;
    let cDate=new Date();
    let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
 
let day=days[cDate.getDay()];
let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let month=months[cDate.getMonth()];
let dates=cDate.getDate();
let year=cDate.getFullYear();
let FullDate=`${month} ${dates}, ${year}`



    let date=new Date(sec*1000);
  let timestr=`${date.getHours()}:${date.getMinutes()}`
  let[mood,setMood]=useState("");
useEffect(()=>{
      if(main){
          switch(main){
         case "Clouds":
        setMood("wi-day-cloudy");
        break;
        case "Rain":
            setMood("wi-day-rain");
            break;
            case "Clear":
                setMood("wi-day-sunny");
                break;
                case "Haze":
                    setMood("wi-day-haze");
                    break;
                    case "Mist":
                    setMood("wi-day-fog");
                    break;
            default:
                setMood("wi-day-sunny")
          }
      } 
},[main])
    return (
        <>
        
        <div className="main1">
            <center>
        <Card sx={{ maxWidth: 630,marginTop:5 ,paddingBottom:3}} style={{borderRadius: "20px"}}>
      <CardMedia
        component="img"
        height="140"
        image="weather.jpg"
    
      />
      <CardContent>
  
        <Typography gutterBottom variant="h5" component="div">
        <i class={`wi ${mood}`} style={{fontSize:"90px", padding:"5px"}}></i>
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:"20px"}}>
      <Grid container spacing={2} columns={18} >
        <Grid item xs={9} style={{backgroundColor:"black", color:"white" ,padding:'5px'}}>
        <h1>{day}&nbsp;&nbsp;{FullDate}</h1>  
        <h1>{temp}&deg;</h1>
        </Grid>
        <Grid item xs={9} style={{color:"black" ,padding:'5px',backgroundColor:"#B7E0F2"}}>
        
<h1>{main}</h1>
<h4>{name}, {country}</h4>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1, marginTop:2, }} style={{paddingLeft:"2px",paddingRight:"2px"}}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={3}>
        <Stack direction="column" alignItems="center" gap={1}>
          <i class="wi wi-sunset"  style={{color:"#B7E0F2"}}></i>
          <Typography variant="body1">{timestr}</Typography>
          <Typography variant="body1">Sunset</Typography>
           
        </Stack>
        </Grid>
        <Grid item xs={3}>
        <Stack direction="column" alignItems="center" gap={1}>
        <i class="wi wi-humidity"  style={{color:"#B7E0F2"}}></i>
          <Typography variant="body1">{humidity}</Typography>
          <Typography variant="body1">Humidity</Typography>
        </Stack> 
        </Grid>
        <Grid item xs={3}>
        <Stack direction="column" alignItems="center" gap={1}>
        <i class="wi wi-rain"  style={{color:"#B7E0F2"}}></i>
          <Typography variant="body1">{pressure}</Typography>
          <Typography variant="body1">Pressure</Typography>
        </Stack>
        </Grid>
        <Grid item xs={3}>
        <Stack direction="column" alignItems="center" gap={1}>
        <i class="wi wi-strong-wind"  style={{color:"#B7E0F2"}}></i>
          <Typography variant="body1">{speed}</Typography>
          <Typography variant="body1">Speed</Typography>
        
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