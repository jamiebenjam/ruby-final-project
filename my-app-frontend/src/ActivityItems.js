
function ActivityItems({museum, restaurant, park, misc}) {
    return (
        <div>
            <button>
                <p>Museum: {museum}</p>
                <p>Restaurant: {restaurant}</p>
                <p>Park: {park}</p>
                <p>Misc: {misc}</p>
            </button>
        </div>

    )
}

export default ActivityItems;