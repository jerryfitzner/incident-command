class AgenciesController < ApplicationController
  before_action :set_agency, only: %i[ show update destroy ]
  skip_before_action :must_login, only: [:only_agency_names]

  # GET /agencies
  def index
    @agencies = Agency.all

    render json: @agencies
  end

  # To Avoid providing data to user who has not signed up
  def only_agency_names
    agencie_names = Agency.all
    render json: agencie_names, include: [:name, :id]
  end

  # GET /agencies/1
  def show
    render json: @agency
  end

  # POST /agencies
  def create
    @agency = Agency.new(agency_params)

    if @agency.save
      render json: @agency, status: :created, location: @agency
    else
      render json: {errors: @agency.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /agencies/1
  def update
    if @agency.update(agency_params)
      render json: @agency
    else
      render json: {errors: @agency.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /agencies/1
  def destroy
    @agency.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agency
      @agency = Agency.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agency_params
      params.require(:agency).permit(:name, :user_id, :emergency_vehicle_id)
    end
end
