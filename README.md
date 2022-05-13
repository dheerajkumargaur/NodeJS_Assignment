# NodeJS_Assignment


Hospital List with Psychiatrist registration him/her self and his patients data in it and also register patient . 

# Tech Stack
Server: Node, Express

# Dependencies: Mongoose, JWT, validator, nodemon, dotenv

#API Reference
Register a Hospital
POST http://localhost:8080/r1/register
Register a Psychiatrist
 POST http://localhost:8080/r1/register
Adding a patient
 POST http://localhost:8080/r1/patient/new
Updtaing exiting patient
  POST  http://localhost:8080/r1/patient/:id
Parameter	Type	Description
id	string	Required. Id of patient to update
Get Single Psychiatrist patient details
  GET  http://localhost:8080/api/v1/pyschiatrists/:id
Parameter	Type	Description
id	string	Required. Id of Psychiatrist fetch the data


# Run Locally
# Clone the project
 git clone https://github.com/dheerajkumargaur/NodeJS_Assignment.git
  
#Install dependencies
npm install
  
# Start the server

  npm run start
