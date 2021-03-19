# hackrush-2021
## How to run?
 - `yarn; cd client; yarn; cd ..`
 - `yarn dev`

## Files & Folders
 - `index.js`: Main server file
 - `models`: Server loading file
 - `initData`: Initial semester & course data
 - `schemas`: Schemas for databases
 - `setDefaultCourses.js`: database initial data
 - `setAllCourses.js`: database initial data
 
 - `client`: Client folder for end user
 - `routes`: API routes for end user

## Setting up the database
 - `yarn c`
 - `yarn s`
## Running the server
 - `yarn server`

## Flow of data
### Database storage
 - Default Sem Data
 - All courses data

### User's browser
 - User queries server to:
   - load default course data
   - save plan data
 - Computation of requirements

## Pages
 - Login Page
 - User dashboard
 - Edit Plan
    - Create new plan page
    - Edit plan page // Not available
 - Shared plan page


## Helpful commands 
### for local `mongod` in linux:
 - `sudo service mongod start`
 - `sudo service mongod status`
 - `sudo service mongod stop`
 - `sudo service mongod restart`
### Stopping stucked servers
#### Linux
 - `sudo fuser -k 5000/tcp`
#### Windows
 - `netstat -ano | findstr :5000`
 - `taskkill /PID 5000 /F`


// "proxy": "https://vast-eyrie-23753.herokuapp.com",