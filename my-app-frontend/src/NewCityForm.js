function NewCityForm() {
    return (
        <div>
            <h2>New City</h2>
            <form>
                <input type="text" name="name" placeholder="city name"/>
                <button type="submit">Add City</button>
            </form>
        </div>
    )
}

export default NewCityForm;