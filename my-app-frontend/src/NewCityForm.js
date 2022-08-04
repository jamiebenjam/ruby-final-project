import React, {useState} from "react";

function NewCityForm({onAddCity, onAddActivity}) {

    const [cityForm, setCityForm] = useState({
        name: ""
    })

    const [activityForm, setActivityForm] = useState({
        museum: "",
        restaurant: "",
        park: "",
        misc: "",
        city_id: "",
    })



    function handleCityFormChange(e) {
        console.log(e.target.value);
        setCityForm((prevState) => {
            let key = e.target.name
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }

    function handleCityClick(e) {
        e.preventDefault()
        console.log(cityForm)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",    
            },
            body: JSON.stringify(cityForm),
        };

        fetch("http://localhost:9292/cities", configObj)
        .then(res => res.json())
        .then(data => {onAddCity(data);
            setCityForm({
                name: ""
            })
        })
    }

    function handleActivityFormChange(e) {
        console.log(e.target.value);
        setActivityForm((prevState) => {
            let key = e.target.name
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }

    function handleActivityClick(e) {
        e.preventDefault()
        console.log(activityForm)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",    
            },
            body: JSON.stringify(activityForm),
        };

        fetch("http://localhost:9292/activities", configObj)
        .then(res => res.json())
        .then(data => {onAddActivity(data);
            setActivityForm({
                museum: "",
                restaurant: "",
                park: "",
                misc: "",
                city_id: ""
            })
        })
    }


    return (
        <div>
            <h2>City</h2>
            <form>
                <input onChange={handleCityFormChange} type="text" name="name" placeholder="City name"/>
                <button onClick={handleCityClick} type="submit">Add City</button>
            </form>
            <h2>Activities</h2>
            <form>
                <input onChange={handleActivityFormChange} type="text" name="museum" placeholder="Museum name"/>
                <input onChange={handleActivityFormChange} type="text" name="restaurant" placeholder="Restaurant name"/>
                <input onChange={handleActivityFormChange} type="text" name="park" placeholder="Park name"/>
                <input onChange={handleActivityFormChange} type="text" name="misc" placeholder="Other"/>
                <input onChange={handleActivityFormChange} type="integer" name="city_id" placeholder="City ID"/>
                <button onClick={handleActivityClick} type="submit">Add Activities</button>
            </form>
        </div>
    )
}

export default NewCityForm;