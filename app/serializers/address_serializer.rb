class AddressSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip
  has_one :incident
end
