
function ActivityItems({ fetchArchives, museum, restaurant, park, misc, id, activity, fetchActivities}) {


    function handleAddtoArchive() {
        console.log("1")
        fetch(`http://localhost:9292/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                active: false
            }),
        })
        .then((res) => {
            console.log("2")
            res.json()})
        .then(() => {
            fetchActivities()
            fetchArchives()
        })
    }

    return (
        <div>
            <button>
                <p>Museum: {museum}</p>
                <p>Restaurant: {restaurant}</p>
                <p>Park: {park}</p>
                <p>Misc: {misc}</p>
                <button onClick={handleAddtoArchive}>Archive</button>
            </button>
        </div>

    )
}

export default ActivityItems;