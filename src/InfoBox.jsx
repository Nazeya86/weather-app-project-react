import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    //const INIT_URL=
    //"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/05/16/3230991-903328247.jpg?itok=gPfrQIYf"
    
    const Hot_URL=
    "https://images.interestingengineering.com/2022/08/01/image/jpeg/DRzWAc3LpXVPb2SpnYQKc6AeJrWUJSuHTyUrpAeV.jpg"
    const COLD_URL=
    "https://images.unsplash.com/photo-1708903465468-023d07adde5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxwaW5lJTIwdHJlZXMlMjBjb3ZlcmVkJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D const RAIN_URL=";
    const RAIN_URL="https://images.unsplash.com/photo-1691265688799-4457dec90cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
    return(
        <div className="abcd">          
           <div className='cardBox'>
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia
             sx={{ height: 140 }}
             image={
                info.humidity >80
                ? RAIN_URL
                : info.temp > 15
                ? Hot_URL
                : COLD_URL
             }
              title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity >80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
              }
                                 
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
               <p> Temperature={info.temp}&deg;C</p>
               <p> Humidity={info.humidity}</p>
               <p> Min Tem= {info.tempMin}&deg;C</p>
               <p> Min Max= {info.tempMax}&deg;C</p>
               <p> The Weather can be desribed as <b>{info.weather}</b> and feels
                    like  {info.feelsLike}&deg;C</p>
            </Typography>
            </CardContent>
            
             </Card>
           </div>
             
        </div>

    )

}