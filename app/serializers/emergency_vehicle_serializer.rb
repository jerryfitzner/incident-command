class EmergencyVehicleSerializer < ActiveModel::Serializer
  attributes :id, :agency, :status, :crew_size, :active, :call_sign
  has_one :incident
end
