const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");

router.post("/register", async (req, res) => {
    const { phone, email, password } = req.body;

    // 1. Validate
    if (!phone || !email || !password) {
        return res.status(400).json({ message: "Thiếu dữ liệu" });
    }

    // 2. Check email tồn tại
    const checkSql = "SELECT id FROM users WHERE email = ?";
    db.query(checkSql, [email], async (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Lỗi DB", err });
        }

        if (rows.length > 0) {
            return res.status(400).json({ message: "Email đã tồn tại" });
        }

        // 3. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Insert user
        const insertSql = `
            INSERT INTO users (phone, email, password)
            VALUES (?, ?, ?) `;

        db.query(insertSql, [phone, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).json({ message: "Lỗi DB", err });
            }

            res.json({ message: "Đăng ký thành công" });
        });
    });
});

console.log("🔥 REGISTER ROUTE ACTIVE");
module.exports = router;
