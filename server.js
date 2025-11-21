const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Ajero, Cassandra Jazer Ross G.</h1>
    <h2>BSIT BA-4102</h2>
    <p>"Believe you can and you're halfway there."</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
