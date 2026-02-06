const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8523",
    database: "argbgear"
});

db.connect(err => {
    if (err) {
        console.error("❌ Kết nối MySQL lỗi:", err);
    } else {
        console.log("✅ Kết nối MySQL thành công");
    }
});

module.exports = db;
