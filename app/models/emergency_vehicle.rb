class EmergencyVehicle < ApplicationRecord
  belongs_to :agency
  belongs_to :incident, optional: true 

  validates :status, presence: true, inclusion: { in: %w(Enroute Arrived Assigned Available Unassigned), message: "%{value} is not a valid response status" }
  validates :crew_size, numericality: { only_integer: true }
  validates :active, inclusion: [true, false]
  validates :call_sign, presence: true, length: { in: 2..20 }
  validates_associated :agency
  validates :incident_id, numericality: { only_integer: true, allow_nil: true }
end
