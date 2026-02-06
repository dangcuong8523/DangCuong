const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/register
router.post("/register", (req, res) => {
    const { phone, email, password } = req.body;

    if (!phone || !email || !password) {
        return res.status(400).json({ message: "Thiếu dữ liệu" });
    }

    const sql = "INSERT INTO users (phone, email, password) VALUES (?, ?, ?)";
    db.query(sql, [phone, email, password], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Lỗi DB" });
        }
        res.json({ message: "Đăng ký thành công" });
    });
});

module.exports = router;
