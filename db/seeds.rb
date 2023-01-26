# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying previous seed data 🧨"

Agency.destroy_all
Incident.destroy_all
Address.destroy_all
User.destroy_all
Emergency_vehicle.destroy_all

puts "Destruction over 🏖️"



puts "Seeding Data... 🌱🌱🌱"

#1) Create Agencies
#2) Create Incidents
#3) Create Addresses
#3) Create Users
#4) Create Emergency Vehicles

agency1 = Agency.create!(name: "Police Department", emergency_service: "Police")
agency2 = Agency.create!(name: "Fire Department", emergency_service: "Fire")
agency3 = Agency.create!(name: "Emergency Medical Services", emergency_service: "Medical")
agency4 = Agency.create!(name: "FBI", emergency_service: "Government")

incident1 = Incident.create!(type: "Apartment Fire", severity: "High")



puts "Seeds Planted 🌳🌳🌳🌳"