import mysql from "mysql2";

//db bağlantısı
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zeynep123",
  database: "bookstore",
});

export default db;
