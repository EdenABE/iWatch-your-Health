# myHealth

An easy*to*use website to see and understand all your health*related questions... personalized for you!!

## Heroku Link
https://afternoon-gorge-92295.herokuapp.com/

## Project's Description

This application takes input from the user directly from the signup page regarding their age and gender. It will later display the homepage, in which, after a greeting to the user, display the medical screenings they should get by the age they are on and their gender, as well as recomended vaccination. 

## Technologies Used

* Handlebars
* Bcrypt
* Express
* MySQL
* Express-Session
* Sequelize

## Challenges

Most of the confussion came with the routing, which after some thorough work and research the confussion dissipated some. 

## How to install and run the prokect

* Create a ".env" file and type in and fill the following:
    * DB_NAME='screening_db'
    * DB_USER=''
    * DB_PASSWORD=''

* Then, open your terminal and type in the following command: 
    * mysql -u root

 * Source the database and quit mysql

Then, type in the following commands:

* npm i
* npm run seed
* node server.js

The app should be listening on localhost:3001

## Website Use

Now you just sign up for the website and we'll take it from here!