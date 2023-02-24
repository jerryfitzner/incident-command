class IncidentsController < ApplicationController
  before_action :set_incident, only: %i[ show update destroy ]

  # GET /incidents
  def index
    @incidents = Incident.all

    render json: @incidents
  end

  # GET /incidents/1
  def show
    render json: @incident
  end

  # POST /incidents
  def create
    @incident = Incident.new(incident_params)
    # address = Address.create(address_params)
    if @incident.save
      render json: @incident, status: :created, location: @incident
      # if address.valid?
      # else
      #   render json: @incident, status: :created, location: @incident
      #   render json: address.errors, status: :unprocessable_entity
      # end
    else
      render json: {errors: @incident.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /incidents/1
  def update
    if @incident.update(incident_params)
      render json: @incident
    else
      render json: {errors: @incident.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /incidents/1
  def destroy
    # binding.pry
    if @incident.emergency_vehicles == []
      @incident.destroy
    else
      render json: {error: "Please clear all units"}, status: 400
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_incident
      @incident = Incident.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def incident_params
      params.require(:incident).permit(:name, :severity)
    end

    def address_params
      params.require(:address).permit(:incident_id, :address, :city, :state, :zip)
    end
end
