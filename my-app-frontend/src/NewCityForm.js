import React, {useState} from "react";

function NewCityForm({onAddCity}) {

    const [cityForm, setCityForm] = useState({
        name: ""
    })



    function handleFormChange(e) {
        console.log(e.target.value);
        setCityForm((prevState) => {
            let key = e.target.value.name
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }

    function handleCityClick(e) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",    
            },
            body: JSON.stringify({...cityForm}),
        };

        fetch("http://localhost:9292/cities", configObj)
        .then(res => res.json())
        .then(data => {
            onAddCity(data);
            setCityForm({
                name: ""
            })
        })
    }


    return (
        <div>
            <h2>City</h2>
            <form>
                <input onChange={handleFormChange} type="text" name="name" placeholder="City name"/>
                <button onClick={handleCityClick} type="submit">Add City</button>
            </form>
            <h2>Activities</h2>
            <form>
                <input onChange={handleFormChange} type="text" name="museum" placeholder="Museum name"/>
                <input onChange={handleFormChange} type="text" name="restaurant" placeholder="Restaurant name"/>
                <input onChange={handleFormChange} type="text" name="park" placeholder="Park name"/>
                <input onChange={handleFormChange} type="text" name="misc" placeholder="Other"/>
                <button onChange={handleFormChange} type="submit">Add Activities</button>
            </form>
        </div>
    )
}

export default NewCityForm;