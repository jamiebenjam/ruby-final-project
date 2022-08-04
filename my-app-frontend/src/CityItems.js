import React from 'react';
// import { act } from 'react-dom/test-utils';
import ActivityItems from './ActivityItems';

function CityItems({name, activities, onDeleteCity, city}) {


const mapActivities = activities.map((activity) => {
    return <ActivityItems
    key={activity.id}
    id={activity.id}
    museum={activity.museum}
    restaurant={activity.restaurant}
    park={activity.park}
    misc={activity.misc}
    activity={activity}
    />
})

function handleDeleteCity() {
    fetch(`http://localhost:9292/cities/${city.id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then((data) => onDeleteCity(data))
}

function handleEditActivity(){
    console.log("edited")
}


    return (
        <div className='wrapper'>
            <button>
                <p>City <br></br>{name} : {city.id}</p>
                <button onClick={handleDeleteCity}>🗑️ </button>
            </button>

            <button>
                <p>Activities</p>
                <ul >{mapActivities}</ul>
                <button onClick={handleEditActivity}>Archive</button>
            </button>
        </div>
    )
}

export default CityItems;