class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :title
      t.text :description
      t.boolean :complete
      t.date :due

      t.timestamps null: false
    end
  end
end
