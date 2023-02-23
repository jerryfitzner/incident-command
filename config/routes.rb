Rails.application.routes.draw do
  resources :agencies
  resources :emergency_vehicles
  resources :addresses
  resources :incidents
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/me', to: 'users#show'
  get '/agency-names', to: 'agencies#only_agency_names'

  post '/login', to: 'sessions#create'
  # post '/evupdate', to 'emergency_vehicles#update_return_incident'

  delete '/logout', to: 'sessions#destroy'

  
end
