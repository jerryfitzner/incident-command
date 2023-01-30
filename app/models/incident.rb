class Incident < ApplicationRecord
  has_one :address, dependent: :destroy
  has_many :emergency_vehicles, dependent: :nullify
  

  validates :name, presence: true
  validates :severity, presence: true, inclusion: { in: %w(Low Medium High), message: "%{value} is not a valid emergency status" }
  # validates_associated :address

end
