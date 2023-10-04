var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Conected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'HIGWAY 37')";
  con.query(sql, function (err, result){
   if (err) throw err;
   console.log("1 record inserted");
  });
});
