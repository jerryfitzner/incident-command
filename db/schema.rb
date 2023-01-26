# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_24_014305) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.bigint "incident_id", null: false
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["incident_id"], name: "index_addresses_on_incident_id"
  end

  create_table "agencies", force: :cascade do |t|
    t.string "name"
    t.string "emergency_service"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "emergency_vehicles", force: :cascade do |t|
    t.integer "agency_id"
    t.string "status"
    t.integer "crew_size"
    t.boolean "active"
    t.string "call_sign"
    t.bigint "incident_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["incident_id"], name: "index_emergency_vehicles_on_incident_id"
  end

  create_table "incidents", force: :cascade do |t|
    t.string "type"
    t.string "severity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "position"
    t.integer "agency_id"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "addresses", "incidents"
  add_foreign_key "emergency_vehicles", "incidents"
end
