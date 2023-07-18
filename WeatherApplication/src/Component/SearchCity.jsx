import { useState } from "react";

function SearchCity({PutCity}) {

    const [city, setCity] = useState("");

    const ChangeCity = (event) => {
        setCity(event.target.value);
    }

    const HandleCity = (event) => {
      event.preventDefault();
      PutCity(city);
    }

  return (
    <div className="SearchCity">
      <div className="SearchCityInp">
        <h1>PHLS Weather</h1>
        <form>
          <input onChange={ChangeCity} value={city} className="SearchInp" />
          <button onClick={HandleCity} className="SearchBtn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchCity;
