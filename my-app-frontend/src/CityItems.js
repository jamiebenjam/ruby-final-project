import React from 'react';
// import { act } from 'react-dom/test-utils';
import ActivityItems from './ActivityItems';

function CityItems({name, activities, onDeleteCity, city, onDeleteActivity}) {


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
    console.log("deleted city")
    fetch(`http://localhost:9292/cities/${city.id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then((data) => onDeleteCity(data))
}

// function handleDeleteActivity() {
//     fetch(`http://localhost:9292/activities/${activity.id}`, {
//         method: 'DELETE',
//     })
//     .then(res => res.json())
//     .then(() => onDeleteActivity(activity))
// }

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
                <button onClick={handleEditActivity}>Edit </button>
                {/* <button onClick={handleDeleteActivity}>🗑️ </button> */}
            </button>
        </div>
    )
}

export default CityItems;