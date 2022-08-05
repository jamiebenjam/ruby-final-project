import React from 'react';
import ActivityItem from '../activity/ActivityList';
import "./cityitem.css"; 

function CityItem({name, activities, onDeleteCity, city, fetchArchives, fetchActivities}) {


const mapActivities = activities.map((activity) => {
    return <ActivityItem
        key={activity.id}
        id={activity.id}
        museum={activity.museum}
        restaurant={activity.restaurant}
        park={activity.park}
        misc={activity.misc}
        activity={activity}
        fetchArchives={fetchArchives}
        fetchActivities={fetchActivities}
    />
})

function handleDeleteCity() {
    fetch(`http://localhost:9292/cities/${city.id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then((data) => onDeleteCity(data))
}



    return (
        <div className='wrapper'>
            <div>
                <h1>{name}</h1>
                <button onClick={handleDeleteCity}>🗑️ </button>
            </div>

            <div>
                <h2>Activities</h2>
                <ul >{mapActivities}</ul>
            </div>
        </div>
    )
}

export default CityItem;