import React, {useState} from "react";

function NewCityForm() {

    const [form, setForm] = useState({})



    function handleFormChange(e) {
        console.log(e.target.value);
        setForm((prevState) => {
            let key = e.target.value.name
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }


    return (
        <div>
            <h2>City</h2>
            <form>
                <input type="text" name="name" placeholder="City name"/>
                <button type="submit">Add City</button>
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