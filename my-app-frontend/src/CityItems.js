function CityItems({name, id}) {

    console.log(name, id);
    return (
        <div>
            <button>
                <p>City</p>
                <p>{name}</p>
                <p>{id}</p>
                </button>
        </div>
    )
}

export default CityItems;