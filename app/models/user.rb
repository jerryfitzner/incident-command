class User < ApplicationRecord
  has_one :agency
  has_many :incidents
  has_many :emergency_vehicles, through: :incidents
end
