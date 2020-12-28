const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const korisnikRouter = require('../backEnd/app/routes/korisnici');
const voziloRouter = require ('../backEnd/app/routes/vozilo');
const administratorRouter = require('../backEnd/app/routes/administrator');
const tipVozilaRouter = require ('../backEnd/app/routes/tip_vozila');
const salonRouter = require ('../backEnd/app/routes/salon');
const rezervacijaRouter = require ('../backEnd/app/routes/rezervacija');
const modelRouter = require ('../backEnd/app/routes/model');
const mjestoRouter = require ('../backEnd/app/routes/mjesto');
const markaRouter = require ('../backEnd/app/routes/marka');
const imaVoziloRouter = require ('../backEnd/app/routes/ima_vozilo');
var con = require('../backEnd/app/config/dbConfig');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//konekcija na bazu
/*var connection=con.connection;
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Spojeno na MySQL server.');
});*/

// Home ruta
app.get("/", (req, res) => {
  res.json({ message: "Pokrenut server!"});
});

// ruta za operacije sa korisnikom
app.use('/korisnici',korisnikRouter);

//ruta za operacije sa vozilom
app.use('/vozilo',voziloRouter);

//ruta za operacije sa korisnikom
app.use('/administrator',administratorRouter);

//ruta za operacije sa tipom vozila
app.use('/tip_vozila', tipVozilaRouter);

//ruta za operacije sa salonom
app.use('/salon', salonRouter);

//ruta za operacije sa rezervacijom
app.use('/rezervacija',rezervacijaRouter);

//ruta za operacije sa modelom
app.use ('/model', modelRouter);

//ruta za operacije sa mjestom
app.use('/mjesto', mjestoRouter);

//ruta za operacije sa markom
app.use('/marka', markaRouter);

//ruta za operacije sa ima_vozilo
app.use ('/ima_vozilo', imaVoziloRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu: ${PORT}.`);
});