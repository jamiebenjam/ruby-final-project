import React from "react";
import ActivityItem from "./ActivityItem";

function ArchivedTrips({archives, fetchActivities, fetchArchives}) {

    const mapArchives = archives.map((archive) => {
        return <ActivityItem
            key={archive.id}
            id={archive.id}
            museum={archive.museum}
            restaurant={archive.restaurant}
            park={archive.park}
            misc={archive.misc}
            activity={archive}
            fetchArchives={fetchArchives}
            fetchActivities={fetchActivities}
        />
})


    return (
        <div>
            <ul>{mapArchives}</ul>
        </div>
    )
}

export default ArchivedTrips;