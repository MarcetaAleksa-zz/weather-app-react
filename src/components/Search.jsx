import "../styles/search.css"
export default function Search(){
    return(
        <div className="search">
            <input type="text" className="box" placeholder="Pretrazi..."> 
            </input>  
            <div className="btn">
                      
            <button className="btn-stat" >Jedan dan</button>
        <button className="btn-stat">Sedam dana</button>         
        
            </div>
            </div>
    )
}

// 08c000bf34662c9f0606abbbb378163d api key
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} open weather api
// api.openweathermap.org/data/2.5/weather?q=BanjaLuka&appid=08c000bf34662c9f0606abbbb378163d geolocation api