class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :must_login

  def must_login
    render json: { message: "Please sign in to your account" } unless signed_in?
  end

  # def current_user
  #   current_user = User.find_by(id: session[:user_id])
  # end

  def admin
    current_user = User.find_by(id: session[:user_id])
    # binding.pry
    current_user.admin 
  end

  private

  def signed_in?
    !!session[:user_id]
  end
end
