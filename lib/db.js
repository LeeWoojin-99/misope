var mysql = require("mysql");
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lwj1316",
    database: "misope"
});
db.connect();
module.exports = db;