
function ActivityItem({ fetchArchives, museum, restaurant, park, misc, id, activity, fetchActivities}) {

    console.log(activity)

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
        <div>
            <button>
                <p>Museum: {museum}</p>
                <p>Restaurant: {restaurant}</p>
                <p>Park: {park}</p>
                <p>Misc: {misc}</p>
                <button onClick={handleToggleArchive}>{activity.active ? 'Archive' : 'Unarchive'}</button>
            </button>
        </div>

    )
}

export default ActivityItem;