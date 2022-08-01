class CitiesController < ApplicationController
    
    get '/cities' do
        cities = City.all
        pets.to_json
    end
end