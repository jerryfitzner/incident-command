class UsersController < ApplicationController
  skip_before_action :must_login, only: [ :create, :show ]
  # before_action :set_user, only: %i[ show update destroy ]
  before_action :authorized, only: [ :show ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    # binding.pry
    user = User.find_by(id: session[:user_id])
    render json: user, status: 200
  end

  # POST /users
  def create
    # binding.pry
    # CREATE A SESSION
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    user = User.find_by(id: params[:id])
    # binding.pry

    if admin?
      if user.update(user_params)
        render json: user
      else
        render json: user.errors, status: :unprocessable_entity
      end
    else 
      render json: { error: "You must be an admin to change the status of another user" }, status: :unauthorized
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password_digest, :name, :position, :agency_id, :admin)
    end

    def nonadmin_user_params
      params.require(:user).permit(:username, :password_digest, :name, :position, :agency)
    end

    #Make sure user is authorized
    def authorized
      return render json: { error: "Unauthorized User" }, status: :unauthorized unless session.include? :user_id
    end
    
end
