class CreateEmergencyVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :emergency_vehicles do |t|
      t.integer :agency_id
      t.string :status
      t.integer :crew_size
      t.boolean :active
      t.string :call_sign
      t.belongs_to :incident, foreign_key: true

      t.timestamps
    end
  end
end
