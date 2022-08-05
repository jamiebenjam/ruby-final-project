import React from 'react';
// import { act } from 'react-dom/test-utils';
import ActivityItem from './ActivityItem';

function CityItem({ name, activities, onDeleteCity, city}) {

    // const [active, setActive] = useState(true)


const mapActivities = activities.map((activity) => {
    return <ActivityItem
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

// function handleArchive(){
//     console.log("archived")
//     const updateActivity = activities.map((activity) => {
//         if (activity.active === true) {
//             return {...activity, active: false}
//         } else {
//             return activity
//         }
//     })
//     setArchive(updateActivity)
// }


// function archiveActivity(newActivity) {
//     setArchive([...archive, newActivity])
//     setActivities(activities.filter(activity => activity.id !== newActivity.id))
// }


    return (
        <div className='wrapper'>
            <button>
                <p>City <br></br>{name} : {city.id}</p>
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