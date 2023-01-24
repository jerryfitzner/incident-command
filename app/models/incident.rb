class Incident < ApplicationRecord
  has_one :address
  belongs_to :emergency_vehicles
  belongs_to :user
end
