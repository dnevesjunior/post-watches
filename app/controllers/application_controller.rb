class ApplicationController < ActionController::Base
  include ::ActionController::Cookies
  skip_before_action :verify_authenticity_token
  after_filter :cors_set_access_control_headers
  protect_from_forgery with: :null_session

  def cors_preflight_check
    if request.method == 'OPTIONS'
      cors_set_access_control_headers
      render text: '', content_type: 'text/plain'
    end
  end

  # protected
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, PATCH, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Credentials'
  end
end
