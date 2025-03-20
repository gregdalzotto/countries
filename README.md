# 🌍 Country Codes JSON

This repository provides a JSON file containing standardized country code information, including name, international calling code, and ISO codes.

## 📂 JSON Structure

The file follows this format:

```json
{
  "AF": {
    "name": "Afghanistan",
    "callingCode": 93,
    "isoA2": "AF",
    "isoA3": "AFG",
    "isoNum": 4
  },
  "AL": {
    "name": "Albania",
    "callingCode": 355,
    "isoA2": "AL",
    "isoA3": "ALB",
    "isoNum": 8
  }
}
```

## 🚀 How to Use

### 🔹 In JavaScript

```js
const fs = require('fs');

fs.readFile('countries.json', 'utf8', (err, data) => {
  if (err) throw err;
  const countries = JSON.parse(data);
  console.log(countries["AF"]); // Output: Data about Afghanistan
});
```

### 🔹 In Python

```python
import json

with open('countries.json', 'r', encoding='utf-8') as file:
    countries = json.load(file)
    print(countries["AF"])  # Output: Data about Afghanistan
```

## 🚀 API - Country Codes API

In addition to the JSON file, this repository also provides a simple API to access country code information.

### 1. Get all countries

- **Endpoint:** `/api/countries`
- **Method:** `GET`
- **Description:** Returns a list of all countries with their details (name, ISO codes, dialing code).

### 2. Get country by ISO code

- **Endpoint:** `/api/countries/{isoCode}`
- **Method:** `GET`
- **Parameters:** 
  - `isoCode`: The 2-letter ISO code of the country (e.g., `US` for the United States).
- **Description:** Returns the details of a country by its ISO code.

**Example Request:**
```bash
GET /api/countries/US
```

**Example Response:**
```json
{
  "name": "United States",
  "callingCode": 1,
  "isoA2": "US",
  "isoA3": "USA",
  "isoNum": 840
}
```

### 3. Search countries by name

- **Endpoint:** `/api/countries/search`
- **Method:** `GET`
- **Parameters:** 
  - `name`: A query string to filter country names (e.g., `an` to find all countries with "an" in their name).
- **Description:** Returns a list of countries whose names contain the provided query string.

**Example Request:**
```bash
GET /api/countries/search?name=an
```

**Example Response:**
```json
[
  {
    "name": "Afghanistan",
    "callingCode": 93,
    "isoA2": "AF",
    "isoA3": "AFG",
    "isoNum": 4
  },
  {
    "name": "Albania",
    "callingCode": 355,
    "isoA2": "AL",
    "isoA3": "ALB",
    "isoNum": 8
  }
]
```

## 📂 Data Format

The `countries.json` file follows this format:

```json
{
  "AF": {
    "name": "Afghanistan",
    "callingCode": 93,
    "isoA2": "AF",
    "isoA3": "AFG",
    "isoNum": 4
  },
  "US": {
    "name": "United States",
    "callingCode": 1,
    "isoA2": "US",
    "isoA3": "USA",
    "isoNum": 840
  }
}
```

## 🚀 How to Run the API Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/country-codes-json.git
   cd country-codes-json
   ```

2. Install the dependencies:
   ```bash
   npm init -y
   npm install express
   ```

3. Create a `server.js` file in the root of your project with the following code:

   ```js
   const express = require('express');
   const fs = require('fs');
   const path = require('path');

   const app = express();
   const port = 3000;

   // Carregar os dados do countries.json
   const countriesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'countries.json'), 'utf8'));

   // Endpoint para obter todos os países
   app.get('/api/countries', (req, res) => {
     res.json(countriesData);
   });

   // Endpoint para buscar por código ISO
   app.get('/api/countries/:isoCode', (req, res) => {
     const isoCode = req.params.isoCode.toUpperCase();
     const country = countriesData[isoCode];

     if (country) {
       res.json(country);
     } else {
       res.status(404).json({ message: 'Country not found' });
     }
   });

   // Endpoint para buscar por nome de país (filtro)
   app.get('/api/countries/search', (req, res) => {
     const name = req.query.name ? req.query.name.toLowerCase() : '';
     const filteredCountries = Object.values(countriesData).filter(country =>
       country.name.toLowerCase().includes(name)
     );

     res.json(filteredCountries);
   });

   // Iniciar o servidor
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Visit `http://localhost:3000` in your browser or use a tool like Postman to make requests to the API.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contribution

Feel free to contribute! If you find an error or want to add more data, open an issue or submit a pull request. 😊
