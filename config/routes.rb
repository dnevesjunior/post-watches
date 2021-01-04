Rails.application.routes.draw do
  root 'pages#index'
  
  namespace :api do
    namespace :v1 do
      resources :posts, param: :slug
    end
  end

  # To handle react-router-dom and not interfere with api routes
  get '*path', to: 'pages#index', via: :all
end
