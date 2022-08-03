import React from 'react';
import ActivityItems from './ActivityItems';

function Home({activities}) {

    const mapActivities = activities.map((activity) => {
        return <ActivityItems
        id={activity.id}
        museum={activity.museum}
        restaurant={activity.restaurant}
        park={activity.park}
        misc={activity.misc}
        />
    })


    return(
    <div className="homeDiv">
        <ul>{mapActivities}</ul>
        <h1 className="welcome">welcome</h1>
    </div>
    )
}

export default Home;