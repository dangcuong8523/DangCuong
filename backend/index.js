const express = require("express");
const app = express();

app.use(express.json());

const registerRoute = require("./routes/register");

app.use("/api", registerRoute);

app.listen(3000, () => {
    console.log("🔥 Server chạy tại http://localhost:3000");
});
