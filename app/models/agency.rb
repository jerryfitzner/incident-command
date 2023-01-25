class Agency < ApplicationRecord
  has_many :users
  has_many :emergency_vehicles

  validates :name, presence: true
end
