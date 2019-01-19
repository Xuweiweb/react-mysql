let mysql=require("mysql");
let con={
    host:"localhost",
    post:"3306",
    user:"root",
    password:"123321",
    database:"mydata"
}
let connection=mysql.createConnection(con);
connection.connect();
module.exports=connection