class AgencySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_one :emergency_vehicle
end
