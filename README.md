

# 🔧 API Functions (Input/Output)

This API provides three simple utilities to transform text using different methods:

- `KelvinBase64Encode`: Encode text to Base64
- `KelvinROT13`: Encode text using the ROT13 cipher
- `KelvinEmojiTranslator`: Translate common words into emojis

---

## 📑 Table of Contents

- [Getting Started](#getting-started)
- [Install Dependencies](#install-dependencies)
- [Development Mode](#development-mode)
- [Production Mode](#production-mode)
- [Usage](#usage)
- [API Tools](#-api-tools)
- [Example curl Commands](#-example-curl-commands)
- [Questions or Issues?](#questions-or-issues)

---

## 🚀 Getting Started

### Clone the repository

**SSH:**
```bash
git clone git@github.com:oroshi80/base64encode.git
```

**HTTPS:**
```bash
git clone https://github.com/oroshi80/base64encode.git
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🛠 Development Mode

```bash
npm run dev
```

---

## 🚢 Production Mode

```bash
npm run start
```

---

## 📡 Usage

You can test the API using tools like **Postman**, **Katalon**, **Bruno**, **HTTPie**, or **cURL**.

### 📘 Get Function Details (Docs)

Use `GET` requests to see input/output structure for each function:

- **GET** `/functions/KelvinBase64Encode`
- **GET** `/functions/KelvinROT13`
- **GET** `/functions/KelvinEmojiTranslator`

Each route returns the function name, a description, input type and output format.

---

### 📤 Use the Functions (POST)

Use `POST` requests with a JSON body to get results:

#### 🧪 Example Request:
**POST** `/KelvinBase64Encode`  
**POST** `/KelvinROT13`  
**POST** `/KelvinEmojiTranslator`

**Body:**
```json
{
  "input": "Hello world"
}
```

#### ✅ Example Response (Base64):
```json
{
  "output": "SGVsbG8gd29ybGQ="
}
```

#### ✅ Example Response (ROT13):
```json
{
  "output": "Uryyb jbeyq"
}
```

#### ✅ Example Response (Emoji):
```json
{
  "output": "👋😊 world"
}
```

---

---

## 💻 API Tools

You can test the API using any of the following tools:

- [Postman](https://www.postman.com/)
- [Bruno](https://www.usebruno.com/)
- [Katalon Studio](https://www.katalon.com/)
- [Insomnia](https://insomnia.rest/)
- [HTTPie](https://httpie.io/)
- `curl` (terminal)

---

## 🧪 Example curl Commands

Replace `localhost:3000` with your deployed host if needed.

### 📄 Base64 Encode
```bash
curl -X POST http://localhost:3000/KelvinBase64Encode \
  -H "Content-Type: application/json" \
  -d '{"input": "Hello world"}'
```

**Response:**
```json
{
  "output": "SGVsbG8gd29ybGQ="
}
```

---

### 🔄 ROT13 Encode
```bash
curl -X POST http://localhost:3000/KelvinROT13 \
  -H "Content-Type: application/json" \
  -d '{"input": "Hello world"}'
```

**Response:**
```json
{
  "output": "Uryyb jbeyq"
}
```

---

### 😄 Emoji Translator
```bash
curl -X POST http://localhost:3000/KelvinEmojiTranslator \
  -H "Content-Type: application/json" \
  -d '{"input": "hello I love pizza"}'
```

**Response:**
```json
{
  "output": "👋😊 I ❤️ 🍕"
}
```

---

## ❓ Questions or Issues?

Please report bugs or request features on the [GitHub Issues page](https://github.com/oroshi80/base64encode/issues).

---
