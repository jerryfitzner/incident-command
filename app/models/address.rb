class Address < ApplicationRecord
  belongs_to :incident

  validates_assosciated :incident
  validates :address, :city, :state, :zip, presence: true
  validates_address fields: [:address, :city, :state, :zip]
end
