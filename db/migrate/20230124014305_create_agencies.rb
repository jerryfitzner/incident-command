class CreateAgencies < ActiveRecord::Migration[7.0]
  def change
    create_table :agencies do |t|
      t.string :name
      t.string :emergency_service

      t.timestamps
    end
  end
end
