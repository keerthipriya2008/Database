import mysql from "mysql2/promise";

const db = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "keerthi19",
    database: "vehicle_service"
});

console.log("MySQL connected successfully!");

export default db;