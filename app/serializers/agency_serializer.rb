class AgencySerializer < ActiveModel::Serializer
  attributes :id, :name, :emergency_service
  has_many :users
  has_many :emergency_vehicles
end
