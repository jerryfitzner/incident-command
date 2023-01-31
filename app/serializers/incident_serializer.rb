class IncidentSerializer < ActiveModel::Serializer
  attributes :id, :name, :severity
  has_one :address
  has_many :emergency_vehicles
end
