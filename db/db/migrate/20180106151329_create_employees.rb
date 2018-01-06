class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string    :name
      t.string    :email
      t.string    :position
      t.datetime  :birthday
      t.string    :phone_number
      t.string    :gender
      t.string    :password
      t.timestamps
    end
  end
end
