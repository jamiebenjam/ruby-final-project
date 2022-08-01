class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/welcome" do
    "This is a welcome page"
  end

end
