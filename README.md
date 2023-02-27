# Incident Command App

The Incident Command app is an app which allows emergency personnel to keep track of incidents in their city and resources allocated to those incidents. 


## Installation Insctructions

- Fork and clone the git hub repository, if you have not done so yet.
- Back End:
  - Open the terminal and run `bundle install` to install the gems. 
  - Next run `rails db:seed` to seed the database with data. 
  - Lastly, run `rails s` to start the API server.
- Open the Front End next:
  - Open the REACT App in your browser by typing `npm start --prefix client` in the terminal.
- The app should now be live in your browser!

## Using the Student Fundraising App

First, you must log into the application or create a new profile. You can use the username of `FredFlinstone` and password `password` if you seeded the data from the database.  

### 1) Home Page

- The Home Page shows us all the incidents currently going on.
- We can create a new incident by clicking `Create Incident`. 
- Each Incident: 
  - We can update the address for an incident by clicking on the address. 
  - We can assign an emergency unit to the incident by clicking assign unit. 
    - Only units which are not attached to other incidents are available to be assigned to an incident.
    - Only units which are `online` via the resources page are available to be assigned to an incident. 
  - A unit's `status` can be updated to `assigned`, `enroute`, or `arrived`, by clicking the current status of the unit.
  - A unit can be deleted by clicking its delete button. 
  - An incident can be deleted if there are no emergency units attached to it. 
- The home page will soon display a map of all the incidents and feature to sort the incidents.  

### 2) Personnel

- The Personnel page shows all the users who have signed up for accounts. 
- If the current user is an administrator, they can make other users administrators by clicking the administrator button. 

### 3) Resources

- All resources are listed on this page.
- A user can take a resource `online` so it can be assigned to an incident, or they can take a resource `offline` if it should not be available at all. 
- Only resources not assigned to a call can be taken offline. 



#### More features to come in the near future. 
