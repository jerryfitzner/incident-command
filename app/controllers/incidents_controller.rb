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
    binding.pry
    address = Address.create(address_params)
    @incident = Incident.new(incident_params)

    if @incident.save
      render json: @incident, status: :created, location: @incident
    else
      render json: @incident.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /incidents/1
  def update
    if @incident.update(incident_params)
      render json: @incident
    else
      render json: @incident.errors, status: :unprocessable_entity
    end
  end

  # DELETE /incidents/1
  def destroy
    @incident.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_incident
      @incident = Incident.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def incident_params
      params.require(:incident).permit(:type, :severity)
    end

    def address_params
      params.require(:address).permit(:incident_id, :address, :city, :state, :zip)
    end
end
