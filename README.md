# Tripmonger
---------------
Tripmonger
==========
Reference Note:
Please download the files from the Github link
https://github.com/arbazasif/Tripmonger
===========
Introduction:
The objective of this project is to create an Airline Web application. The Website's name is Tripmonger which can provide customers the option to select a departing flight and arrival flight and the website displays the same based on the  input provided. 

Inputs required:
Departing City
Arrival City
One way/ Round Trip
Ticket Quantity
Login Information (Username and password)
Registeration (First Name, Last name, Address, etc.) 
Billing Information (Credit card Details and Billing Address)

Webpages Used:
1.  Home Page 
2.  Select Departure Flight Page 
3.  Select Return Flight Page 
4.  Select Ticket Quantity Page 
5.  Login Page 
6.  Create New Account Page 
7.  Great Deals Page 
8.  Help/Information Page 
9.  System Rules Page 
10.  Contact Page 
11.  Enter Billing Information Page 
12.  Confirm Reservation Page 
13.  Submit Reservation Page 

Tools/Softwares used:
HTML,CSS,JS,NodeJS,MySQL

Steps taken:
>Created websites using HTML,CSS,JavaScript

>Downloaded and installed MySQL taking reference from the file in Mindspace Presentations
https://purdue.brightspace.com/d2l/le/content/588876/viewContent/10670593/View
MySQL Download Link:
https://dev.mysql.com/doc/mysql-installer/en/mysql-installer-setup.html

>Create Databses and tables for Customer, City,Flight, Reservation
(Refer MySQL Statements file)

>Insert Data into tables Customer, City, Flight
(Refer MySQL Statements file) 

>Install NodeJS
https://nodejs.org/en/download/

>After Succesfull installation of Node, Create Folders

>Initialize the Project
npm init
>Install required modules
npm install express express-fileupload body-parser mysql ejs req-flash --save

>Install modules to be used globally
npm install nodemon -g

>Paste all created Webpages into the 'Views' folder created earlier

>Create Databases using MySQL and connect to the pages

>Connect to Server using Command Prompt and start server

>After Succesfully estabilishing connection Start application from the homepage using the below:
http://localhost:5000/1_Home
===============
Website Screenshots:
CMD screenshot:
![Screenshot (4)](https://user-images.githubusercontent.com/73696669/204122681-c2819963-ccae-4c04-809d-b753abe94359.png)

1. Home Page and selecting Flight departure, Arrival time and date:
![image](https://user-images.githubusercontent.com/73696669/204122760-e442518e-3203-419d-b8aa-241b238b2c37.png)

In the home page (as per the guidelines provided) I designed the website such that they will be greeted and then they will be presented with a form on the right hand side of the screen allowing them to search for flights.

Here we have selected the time, dates and location from Chicago to New York.

2. Departures Page:
![image](https://user-images.githubusercontent.com/73696669/204123135-6d135ff9-70b8-4be9-b5df-77a152ea1dc7.png)

In the departures page we will select one among the list. The list will be pulled from the database.

3. Arrivals Page:
![image](https://user-images.githubusercontent.com/73696669/204123079-fb62c510-67c2-4071-bd09-e4dff83a16b2.png)

In the arrivals page we will select one among the list. The list will be pulled from the database.

4.  Select Ticket Quantity Page 
![image](https://user-images.githubusercontent.com/73696669/204123547-c0715827-b870-4682-bb47-f46d6b3b9416.png)

In the next page we will select number of Passengers

5.  Login Page 
![image](https://user-images.githubusercontent.com/73696669/204123585-f034b7e6-6c38-48e5-a9db-067357f418b1.png)

Here the user will then login
If the user does not have an account, they will click on 'Click here to Sign up'

6.  Create New Account Page
![image](https://user-images.githubusercontent.com/73696669/204123620-93245a6f-9467-4b6e-89c3-36cad1cbd51f.png)

In the registration page, the user will regsiter details and click on proceed to next page

If the user does not provide any details the error will popup
![image](https://user-images.githubusercontent.com/73696669/204123661-2e0d7a2c-a1c1-4be8-a0ab-91caf2064a2d.png)

7. Great Deals page

The user will be greeted with a great deals page. I was unable to program this due to deadline and family emergencies.

8.  Help/Information Page
![image](https://user-images.githubusercontent.com/73696669/204123748-a0ff092d-5808-472a-93e7-e27800b3c09b.png)

Help/Information page 
The help/information Page is a sub-section of the main website, which attempts to help users who may have difficulty, find their way.  They are greeted by a welcome message telling them about our site as well as given the choice to view the following pages: 

9.  System Rules Page 
![image](https://user-images.githubusercontent.com/73696669/204123828-292583fc-f9c4-43af-b007-16afdc7966b8.png)

On this page, all the System Rules/minimum requirements will be displayed.

10. Contact us Page
![image](https://user-images.githubusercontent.com/73696669/204123779-e93fa12e-444d-4476-8cc8-f079ada2afae.png)

This will display who to contact if there's an issue.

11.  Enter Billing Information Page
![image](https://user-images.githubusercontent.com/73696669/204123675-6936be98-82de-4bb4-b96e-c8870152ffa8.png)

12:  Confirm Reservation Page
![image](https://user-images.githubusercontent.com/73696669/204123866-c05e5659-3b97-4ba6-bb43-b56613226244.png)

Here the user would confirm the reservation

13. Submit Reservation Page
![image](https://user-images.githubusercontent.com/73696669/204123896-242d3a10-4ff0-410c-a721-f804f03b0b99.png)

===============
Troubleshooting:
1. If the error 'Cannot GET /' appears, it means that the database has not been setup.
![image](https://user-images.githubusercontent.com/73696669/204122335-10378d5b-ab2b-4f4f-a0ae-9f98325c88ab.png)

To resolve the issue, start the server by entering the following commands:
>Open File Directory in CMD
>npm start
>node app.js

Once done, the error shows: 'Server running on port: 5000'
After this you may enter the following in your web browser:
http://localhost:5000/

2. if the error appears as the following 
![image](https://user-images.githubusercontent.com/73696669/204122469-c654111e-6256-4a6f-9b03-f9ad19abc14f.png)
it means that there is a module missing.
In this case, modules will need to be installed. We can do it by entering the following:
> npm install (module name)
eg: npm install express
