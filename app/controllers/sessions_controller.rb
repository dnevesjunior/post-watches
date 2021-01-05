class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :current_user

  def current_user
    return nil unless session[:user_id]

    @current_user ||= User.find(session[:user_id])
  end

  def authenticate
    render json: { error: 'Access Denied' }, status: 401 unless current_user
  end
end