import express from "express";

const app = express();
const PORT = 5000;

//Middleware

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Backend Is Running");
});

//Start server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});