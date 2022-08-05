import React, { useState, useEffect} from "react";
import ArchivedItem from "./ArchivedItem";

function ArchivedTrips({fetchArchives, setArchives, archives}) {
    console.log(archives)

    // const [archives, setArchives] = useState([])

    function fetchArchives() {
        fetch("http://localhost:9292/archive")
        .then(response => response.json())
        .then(archiveData => setArchives(archiveData))
    }
    
    useEffect(fetchArchives, []);

    // FetchingArchives = () => {};

    const mapArchives = archives.map((archive) => {
        return <ArchivedItem
        key={archive.id}
        id={archive.id}
        museum={archive.museum}
        restaurant={archive.restaurant}
        park={archive.park}
        misc={archive.misc}

        />
})


    return (
        <div>
        <ul>{mapArchives}</ul>
        </div>
    )
}

export default ArchivedTrips;