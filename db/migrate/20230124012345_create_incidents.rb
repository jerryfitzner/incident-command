class CreateIncidents < ActiveRecord::Migration[7.0]
  def change
    create_table :incidents do |t|
      t.string :name
      t.string :severity


      t.timestamps
    end
  end
end
