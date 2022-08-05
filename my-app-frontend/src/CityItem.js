import React from 'react';
import ActivityItem from './ActivityItem';

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
            <button>
                <p>{name}</p>
                <button onClick={handleDeleteCity}>🗑️ </button>
            </button>

            <button>
                <p>Activities</p>
                <ul >{mapActivities}</ul>
            </button>
        </div>
    )
}

export default CityItem;