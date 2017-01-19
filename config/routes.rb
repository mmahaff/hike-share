Rails.application.routes.draw do
  get 'static_pages/home'

  root 'static_pages#home'

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end 
end
