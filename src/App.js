import { useState,useEffect } from "react"
import './App.css';
import Weather from "./components/Weather"



function App() {
  const [lat,setLat] = useState(0) 
  const [lon,setLon] = useState(0) 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
        setIsLoading(false)

      }, (error) => {
        alert(error)
      })
    } else {
      alert("sun selain ei kyl nyt tue geosijaintia oon aika varma ehkä? maby, katotaan kohta tai joskus tos ens vuonna ku nyt peukalo vähä kipee katos")
    }
  
    
  }, [])
  
  if (isLoading) {
    return <div><p>oota ku lattaan</p></div>
  } else {
    return (
      <div>
      <p>
        Täälläkö nää nyt oleskelet?: 
        {lat},
        {lon}
      </p>
      <Weather lat={lat} lon={lon}/>
    </div>
    )
  }
}

export default App;
