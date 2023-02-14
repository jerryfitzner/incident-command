Rails.application.routes.draw do
  resources :agencies
  resources :emergency_vehicles
  resources :addresses
  resources :incidents
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'

  
end
