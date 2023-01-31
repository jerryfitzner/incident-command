class SessionsController < ApplicationController
  skip_before_action :must_login, only: [ create ]

  def create
    user = user.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: { error: "Invalid username or password." }, status: :unathorized
    end
  end

  def delete
    session.delete :user_id
    head :no_content
  end

end
