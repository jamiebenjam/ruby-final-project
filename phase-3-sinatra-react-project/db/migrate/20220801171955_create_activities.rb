class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :museum
      t.string :restaurant
      t.string :park
      t.string :misc
      t.integer :city_id
    end
  end
end
