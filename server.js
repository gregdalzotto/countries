const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// load data from countries.json
const countriesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "countries.json"), "utf8")
);

// Endpoint get all countries
app.get("/api/countries", (req, res) => {
  res.json(countriesData);
});

// Endpoint get ISO code
app.get("/api/countries/:isoCode", (req, res) => {
  const isoCode = req.params.isoCode.toUpperCase();
  const country = countriesData[isoCode];

  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Endpoint get by name (filter)
app.get("/api/countries/search", (req, res) => {
  const name = req.query.name ? req.query.name.toLowerCase() : "";
  const filteredCountries = Object.values(countriesData).filter((country) =>
    country.name.toLowerCase().includes(name)
  );

  res.json(filteredCountries);
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
