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

## 📌 Possible Uses

- Applications and websites that need standardized country data.
- Integrations with forms and APIs.
- Telephony software to identify international dialing codes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contribution

Feel free to contribute! If you find an error or want to add more data, open an issue or submit a pull request. 😊
