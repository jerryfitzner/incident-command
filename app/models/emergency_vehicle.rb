class EmergencyVehicle < ApplicationRecord
  belongs_to :agency
  has_many :incidents
  has_many :users, through: :incidents
end
