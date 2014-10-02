class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.boolean :win

      t.timestamps
    end
  end
end
