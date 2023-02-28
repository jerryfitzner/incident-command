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
EmergencyVehicle.destroy_all

puts "Destruction over 🏖️"



puts "Seeding Data... 🌱🌱🌱"

#1) Create Agencies
#2) Create Incidents
#3) Create Addresses
#3) Create Users
#4) Create Emergency Vehicles

# agency1 = Agency.create!(name: "Police Department", emergency_service: "Police")
# agency2 = Agency.create!(name: "Fire Department", emergency_service: "Fire")
# agency3 = Agency.create!(name: "Emergency Medical Services", emergency_service: "Medical")
# agency4 = Agency.create!(name: "FBI", emergency_service: "Government")

# incident1 = Incident.create!(name: "Apartment Fire", severity: "High")
# incident2 = Incident.create!(name: "Cat in Tree", severity: "Low")
# incident3 = Incident.create!(name: "Neighborhood Flood", severity: "Medium")
# incident4 = Incident.create!(name: "Vehicle Crash", severity: "Medium")
# incident5 = Incident.create!(name: "Tornado", severity: "High")
# incident6 = Incident.create!(name: "Burglary Alarm", severity: "Low")

# Address.create!(incident_id: incident1.id, address: "222 E 3rd Street", city: "Charlotte", state: "North Carolina", zip: "28202")
# Address.create!(incident_id: incident2.id, address: "1201 W 4th Street", city: "Charlotte", state: "North Carolina", zip: "28202")
# Address.create!(incident_id: incident3.id, address: "5800 Brookshire Blvd", city: "Charlotte", state: "North Carolina", zip: "28216")
# Address.create!(incident_id: incident4.id, address: "1100 Beatties Ford Road", city: "Charlotte", state: "North Carolina", zip: "28216")
# Address.create!(incident_id: incident5.id, address: "3807 Statesville Ave", city: "Charlotte", state: "North Carolina", zip: "28206")
# Address.create!(incident_id: incident6.id, address: "2620 Tuckaseegee Rd", city: "Charlotte", state: "North Carolina", zip: "28202")

# User.create!(username: "FredFlinstone", password: "password", password_confirmation: "password", name: "Fred Flinstone", position: "Sergeant", agency_id: agency1.id, admin: true)
# User.create!(username: "WilmaFlinstone", password: "password", password_confirmation: "password", name: "Wilma Flinstone", position: "Captain", agency_id: agency2.id, admin: false)
# User.create!(username: "BarneyRubble", password: "password", password_confirmation: "password", name: "Barney Rubble", position: "Paramedic", agency_id: agency3.id, admin: false)
# User.create!(username: "BettyRubble", password: "password", password_confirmation: "password", name: "Betty Rubble", position: "Chief", agency_id: agency2.id, admin: false)
# User.create!(username: "BamBamFlinstone", password: "password", password_confirmation: "password", name: "Bam-Bam Flinstone", position: "Corporal", agency_id: agency1.id, admin: false)
# User.create!(username: "DinoFlinstone", password: "password", password_confirmation: "password", name: "Dino Flinstone", position: "Doctor", agency_id: agency3.id, admin: false)
# User.create!(username: "PearlSlaghoople", password: "password", password_confirmation: "password", name: "Pearl Slaghoople", position: "Investigator", agency_id: agency4.id, admin: false)
# User.create!(username: "FredSlate", password: "password", password_confirmation: "password", name: "Fred Slate", position: "Engineer", agency_id: agency2.id, admin: false)


# EmergencyVehicle.create!(status: "Enroute", crew_size: 1, active: true, call_sign: "Gov2", incident_id: incident6.id, agency_id: agency4.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "MS1", incident_id: incident5.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 2, active: true, call_sign: "MS2", incident_id: incident5.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 2, active: true, call_sign: "MS3", incident_id: incident5.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Assigned", crew_size: 2, active: true, call_sign: "MS4", incident_id: incident4.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 2, active: true, call_sign: "MS5", incident_id: incident1.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 2, active: true, call_sign: "MS6", incident_id: incident1.id, agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 2, active: false, call_sign: "MS7", agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 2, active: false, call_sign: "MS8", agency_id: agency3.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 4, active: true, call_sign: "Engine1", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 4, active: true, call_sign: "Engine2", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 6, active: true, call_sign: "Ladder1", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 2, active: true, call_sign: "Rescue1", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 4, active: true, call_sign: "Engine3", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Assigned", crew_size: 4, active: true, call_sign: "Engine4", incident_id: incident1.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "Rescue2", incident_id: incident2.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 4, active: true, call_sign: "Engine10", incident_id: incident3.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 4, active: true, call_sign: "Search1", incident_id: incident5.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Arrived", crew_size: 4, active: true, call_sign: "Search2", incident_id: incident5.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 4, active: true, call_sign: "Search3", incident_id: incident5.id, agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 4, active: false, call_sign: "Engine11", agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 4, active: false, call_sign: "Engine12", agency_id: agency2.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K330", incident_id: incident3.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K333", incident_id: incident3.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K373", incident_id: incident3.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K409", incident_id: incident4.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K406", incident_id: incident4.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K405", incident_id: incident4.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K288", incident_id: incident5.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K391", incident_id: incident5.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K424", incident_id: incident6.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Enroute", crew_size: 2, active: true, call_sign: "K445", incident_id: incident6.id, agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 2, active: false, call_sign: "K445", agency_id: agency1.id)
# EmergencyVehicle.create!(status: "Unassigned", crew_size: 2, active: false, call_sign: "K445", agency_id: agency1.id)


puts "Seeds Planted 🌳🌳🌳🌳"