import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css';
import { useEffect, useState } from 'react';
import WeatherDay1 from '../weatherday1/weatherday1';
import WeatherData from '../weatherdata/weatherdata';
import WeatherDay2 from '../weatherday2/weatherday2';
import WeatherDay3 from '../weatherday3/weatherday3';
import WeatherDay4 from '../weatherday4/weatherday4';
import WeatherDay5 from '../weatherday5/weatherday5';
const Searchbar=()=>{
    const [searchVal,setSearchVal]=useState("Faisalabad")
    let[allInfo,setAllInfo]=useState({})
    let[day1,setDay1]=useState([]);
    let[day2,setDay2]=useState([]);
    let[day3,setDay3]=useState([]);
    let[day4,setDay4]=useState([]);
    let[day5,setDay5]=useState([]);
  
    const searchCityData= async()=>{
        
        try{
            
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=9f6c4fefd2f77206577bd2dc5bb34cb3`;
        console.log(url)
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
    
        const {temp,humidity,pressure}=data.main;
        const {main}=data.weather[0]
        const{name}=data;
        const{country,sunset}=data.sys;
        const {speed}=data.wind
        const alldata={
            temp,
            main,
            name,
            country,
            sunset,
            humidity,
            pressure,
            speed
        }
    
        setAllInfo(alldata);
      
        let urlFive=`https://api.openweathermap.org/data/2.5/forecast?q=${searchVal}&units=metric&appid=1b02ce9b5b5baaf5c300bb2c043c2847`
        let resFive=await fetch(urlFive)
        let dataFive=await resFive.json();

         let temperature=[]; 
     
        for(let i=0;i<dataFive.list.length;i++){
            let obj={};
            if(i===8){
                break;
            }
            else
       obj['temp']=dataFive.list[i].main.temp;
       obj['datee']=dataFive.list[i].dt_txt;
        obj['name']=dataFive.list[i].weather[0].main
        temperature.push(obj)
        
        }
        setDay1(temperature)

        
        let temperature2=[]; 
     
        for(let i=8;i<dataFive.list.length;i++){
            let obj2={};
            if(i===16){
                break;
            }
            else
       obj2['temp2']=dataFive.list[i].main.temp;
       obj2['datee2']=dataFive.list[i].dt_txt;
        obj2['name2']=dataFive.list[i].weather[0].main
        temperature2.push(obj2)
        
        }
       
        setDay2(temperature2)
        
 

        let temperature3=[]; 
     
        for(let i=16;i<dataFive.list.length;i++){
            let obj3={};
            if(i===24){
                break;
            }
            else
       obj3['temp3']=dataFive.list[i].main.temp;
       obj3['datee3']=dataFive.list[i].dt_txt;
        obj3['name3']=dataFive.list[i].weather[0].main
        temperature3.push(obj3)
        
        }
       
        setDay3(temperature3)
      
     

        let temperature4=[]; 
     
        for(let i=24;i<dataFive.list.length;i++){
            let obj4={};
            if(i===32){
                break;
            }
            else
       obj4['temp4']=dataFive.list[i].main.temp;
       obj4['datee4']=dataFive.list[i].dt_txt;
        obj4['name4']=dataFive.list[i].weather[0].main
        temperature4.push(obj4)
        
        }
       
        setDay4(temperature4)


        let temperature5=[]; 
     
        for(let i=32;i<dataFive.list.length;i++){
            let obj5={};
           
       obj5['temp5']=dataFive.list[i].main.temp;
       obj5['datee5']=dataFive.list[i].dt_txt;
        obj5['name5']=dataFive.list[i].weather[0].main
        temperature5.push(obj5)
        
        }
       
        setDay5(temperature5)
    }

    
    catch(error){
console.log(error)
    }
}

 
   useEffect(()=>{
        searchCityData();
    },[])
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
        value={searchVal}
      
        onChange={(e)=>setSearchVal(e.target.value)}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" style={{color:"#67B5E6"}} onClick={searchCityData} >
        <SearchIcon />
      </IconButton>

      
    </Paper>
    </div>
    <WeatherData allInfo={allInfo}/>
    <WeatherDay1 day1={day1}></WeatherDay1>
    <WeatherDay2 day2={day2}></WeatherDay2>
   <WeatherDay3 day3={day3}></WeatherDay3>
   <WeatherDay4 day4={day4}></WeatherDay4>
   <WeatherDay5  day5={day5}></WeatherDay5>
    </>
    )
}
export default Searchbar;