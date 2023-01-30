class User < ApplicationRecord
  has_secure_password
  belongs_to :agency
  

  validates :username, uniqueness: true, presence: true, length: { in: 6..20 }
  validates :password_digest, presence: true, length: { in: 6..200 }
  validates :name, presence: true, length: { in: 4..20 }
  validates :position, presence: true, length: { in: 1..15 }
  validates :agency_id, presence: true, numericality: { only_integer: true }
  validates :admin, inclusion: [true, false]
  validates_associated :agency
end
