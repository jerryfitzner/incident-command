class AddressSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip
  belongs_to :incident
end
