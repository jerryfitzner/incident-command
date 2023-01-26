class Agency < ApplicationRecord
  has_many :users
  has_many :emergency_vehicles

  validates :name, presence: true
  validates :emergency_service, presence: true, { in: %w(police fire medical government other),
  message: "%{value} is not a valid emergency service." }
end
