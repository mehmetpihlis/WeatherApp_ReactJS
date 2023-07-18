import WriteWeather from "./WriteWeather"

function ListWeather( {WeatherList} ) {
    return <div className="ListWeather">
        {WeatherList.map((weather, index) => {
            return <WriteWeather 
            weather= {weather}
            key= {index}
            /> 
        })}
    </div> ;
}

export default ListWeather;