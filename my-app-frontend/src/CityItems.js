import React from 'react';
import ActivityItems from './ActivityItems';

function CityItems({name, activities}) {


const mapActivities = activities.map((activity) => {
    return <ActivityItems
    key={activity.id}
    id={activity.id}
    museum={activity.museum}
    restaurant={activity.restaurant}
    park={activity.park}
    misc={activity.misc}
    />
})
    return (
        <div>
            <button>
                <p>City <br></br>{name}</p>
            </button>
            <ul>{mapActivities}</ul>
        </div>
    )
}

export default CityItems;