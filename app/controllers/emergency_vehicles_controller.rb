class EmergencyVehiclesController < ApplicationController
  before_action :set_emergency_vehicle, only: %i[ show update destroy ]

  # GET /emergency_vehicles
  def index
    @emergency_vehicles = EmergencyVehicle.all

    render json: @emergency_vehicles
  end

  # GET /emergency_vehicles/1
  def show
    render json: @emergency_vehicle
  end

  # POST /emergency_vehicles
  def create
    @emergency_vehicle = EmergencyVehicle.new(emergency_vehicle_params)

    if @emergency_vehicle.save
      render json: @emergency_vehicle, status: :created, location: @emergency_vehicle
    else
      render json: @emergency_vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /emergency_vehicles/1
  def update
    if @emergency_vehicle.update(emergency_vehicle_params)
      render json: @emergency_vehicle
    else
      render json: @emergency_vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /emergency_vehicles/1
  def destroy
    @emergency_vehicle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_emergency_vehicle
      @emergency_vehicle = EmergencyVehicle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def emergency_vehicle_params
      params.require(:emergency_vehicle).permit(:agency, :status, :crew_size, :active, :call_sign, :incident_id)
    end
end
