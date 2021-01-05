Rails.application.routes.draw do
  root 'pages#index'
  
  namespace :api do
    namespace :v1 do
      resources :posts, param: :slug
      resources :auth, only: [:create] do
        collection do
          get 'logged_in', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end
      resources :registrations, only: [:create]
    end
  end

  # To handle react-router-dom and not interfere with api routes
  get '*path', to: 'pages#index', via: :all
end
