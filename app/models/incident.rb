class Incident < ApplicationRecord
  has_one :address
  has_many :emergency_vehicles
  

  validates :type, presence: true
  validates :severity, presence: true, inclusion: { in: %w(low medium high),
  message: "%{value} is not a valid emergency status" }
  validates_assosciated :address

end
