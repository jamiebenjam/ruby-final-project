import './activityList.css';
import Item from './ActivityItem.js';

function ActivityItem({ fetchArchives, museum, restaurant, park, misc, activity, fetchActivities}) {

    function handleToggleArchive() {
        fetch(`http://localhost:9292/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                active: !activity.active
            }),
        })
        .then((res) => res.json())
        .then(() => {
            fetchArchives()
            fetchActivities()
        })
    }

    return (
            <div className="activity-wrapper">
                <Item activity={museum}><h3>Museum: </h3></Item>
                <Item activity={restaurant}><h3>Restaurant: </h3></Item>
                <Item activity={park}><h3>Park: </h3></Item>
                <Item activity={misc}><h3>Misc: </h3></Item>
                <button onClick={handleToggleArchive}>{activity.active ? 'Archive' : 'Unarchive'}</button>
            </div>

    )
}

export default ActivityItem;