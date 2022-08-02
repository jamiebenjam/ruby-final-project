import React from 'react';
import CityItems from './CityItems';

function Home({cities}) {

    console.log(cities)

    const mapCities = cities.map((city) => {
        return <CityItems
        name={city.name}
        id={city.id}
        />
    })

    
    console.log(mapCities)

    return(
    <div className="homeDiv">
        <section>
            <ul>{mapCities}</ul>
        </section>
        <h1 className="welcome">welcome</h1>
    </div>
    )
}

export default Home;