class EmergencyVehicleSerializer < ActiveModel::Serializer
  attributes :id, :agency, :status, :crew_size, :active, :call_sign
  belongs_to :incident
end
