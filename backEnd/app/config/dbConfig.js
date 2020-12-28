const mysql = require ('mysql');
//konfiguracija konekcije na bazu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123456',
    database: 'rentacaraplikacija'
  });

 connection.connect(function(err){
   if (err) throw err;
   console.log("Spojeno na bazu :)");
 });

 module.exports = connection;