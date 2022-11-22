const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

// const {getHomePage} = require('./routes/index');
// const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
//const db = mysql.createConnection ({
  //  host: 'localhost',
    //user: 'root',
    //password: 'rootrootroot1',
    //database: 'Tripmonger'
//});

// connect to database
//db.connect((err) => {
  //  if (err) {
    //    throw err;
    //}
    //console.log('Connected to database');
//});
//global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/html',express.static(__dirname + 'public/html'))

app.get('/1_Home', (req,res) => {
 res.render('1_Home')})
app.get('/2_DeparturePage', (req,res) => {
 res.render('2_DeparturePage')})
app.get('/3_ArrivalsPage', (req,res) => {
 res.render('3_ArrivalsPage')})
app.get('/4_TicketQuantityPage', (req,res) => {
 res.render('4_TicketQuantityPage')})
app.get('/5_LoginPage', (req,res) => {
 res.render('5_LoginPage')})
app.get('/6_AccountCreationPage', (req,res) => {
 res.render('6_AccountCreationPage')})
app.get('/7_GreatDeals', (req,res) => {
 res.render('7_GreatDeals')})
app.get('/8_HelpInformationPage', (req,res) => {
 res.render('8_HelpInformationPage')})
app.get('/9_SystemRules', (req,res) => {
 res.render('9_SystemRules')})
app.get('/10_ContactUs', (req,res) => {
 res.render('10_ContactUs')})
app.get('/11_BillingPage', (req,res) => {
 res.render('11_BillingPage')})
app.get('/12_ConfirmReservationPage', (req,res) => {
 res.render('12_ConfirmReservationPage')})
app.get('/13_SubmitReservationPage', (req,res) => {
 res.render('13_SubmitReservationPage')})


// routes for the app
/*
app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
*/

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});