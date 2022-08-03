import React from 'react';
import CityItems from './CityItems';
import ActivityItems from './ActivityItems';

function Home({cities, activities}) {

    const mapCities = cities.map((city) => {
        return <CityItems
        id={city.id}
        name={city.name}
        />
    })

    const mapActivities = activities.map((activity) => {
        return <ActivityItems
        id={activity.id}
        museum={activity.museum}
        restaurant={activity.restaurant}
        park={activity.park}
        misc={activity.misc}
        />
    })


    
    console.log(mapActivities)

    return(
    <div className="homeDiv">
        <section>
            <ul>{mapCities}</ul>
            <ul>{mapActivities}</ul>
        </section>
        <h1 className="welcome">welcome</h1>
    </div>
    )
}

export default Home;