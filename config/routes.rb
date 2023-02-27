Rails.application.routes.draw do
  namespace :api do
    resources :agencies
    resources :emergency_vehicles
    resources :addresses
    resources :incidents
    resources :users
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    get '/me', to: 'users#show'
    get '/agency-names', to: 'agencies#only_agency_names'

    post '/login', to: 'sessions#create'

    delete '/logout', to: 'sessions#destroy'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
